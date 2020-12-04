import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styled, { withTheme, keyframes, css } from 'styled-components'

import safeInvoke from '../../../lib/safe-invoke'
import preventBodyScroll from '../../../lib/prevent-body-scroll'
import { Portal } from '../../portal'

const ANIMATION_DURATION = 240
const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const ScOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  ${p =>
    p.centerContent &&
    css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
    `}

  &::before {
    content: ' ';
    background-color: rgba(67, 90, 111, 0.7);
    left: 0;
    top: 0;
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
  }

  &[data-state='entering']::before,
  &[data-state='entered']::before {
    animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting']::before,
  &[data-state='exited']::before {
    animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class Overlay extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    isShown: PropTypes.bool,

    /**
     * Function called when overlay is about to close.
     * Return `false` to prevent the sheet from closing.
     * type: `Function -> Boolean`
     */
    onBeforeClose: PropTypes.func,

    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,

    /**
     * Whether or not to prevent body scrolling outside the context of the overlay
     */
    preventBodyScrolling: PropTypes.bool,

    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnClick: PropTypes.bool,

    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress: PropTypes.bool,

    /**
     * Boolean indicating if the content in the overlay will be centered.
     */
    centerContent: PropTypes.bool,
  }

  static defaultProps = {
    onExit: () => {},
    onExiting: () => {},
    onExited: () => {},
    onEnter: () => {},
    onEntering: () => {},
    onEntered: () => {},
    shouldCloseOnClick: true,
    shouldCloseOnEscapePress: true,
    preventBodyScrolling: false,
    centerContent: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      exiting: false,
      exited: !props.isShown,
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isShown && this.props.isShown) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ exited: false })
    }
  }

  componentWillUnmount() {
    this.handleBodyScroll(false)
    document.body.removeEventListener('keydown', this.onEsc, false)
  }

  /**
   * Methods borrowed from BlueprintJS
   * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
   */
  bringFocusInsideOverlay = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !this.props.isShown
      ) {
        return
      }

      const isFocusOutsideModal = !this.containerElement.contains(
        document.activeElement,
      )
      if (isFocusOutsideModal) {
        const autofocusElement = this.containerElement.querySelector(
          '[autofocus]',
        )
        const wrapperElement = this.containerElement.querySelector('[tabindex]')
        const buttonElement = this.containerElement.querySelector('button')

        if (autofocusElement) {
          autofocusElement.focus()
        } else if (wrapperElement) {
          wrapperElement.focus()
        } else if (buttonElement) {
          buttonElement.focus()
        }
      }
    })
  }

  bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
      ) {
        return
      }

      const isFocusInsideModal = this.containerElement.contains(
        document.activeElement,
      )

      // Bring back focus on the target.
      if (
        this.previousActiveElement &&
        (document.activeElement === document.body || isFocusInsideModal)
      ) {
        this.previousActiveElement.focus()
      }
    })
  }

  onEsc = e => {
    // Esc key
    if (e.keyCode === 27 && this.props.shouldCloseOnEscapePress) {
      this.close()
    }
  }

  close = () => {
    const shouldClose = safeInvoke(this.props.onBeforeClose)
    if (shouldClose !== false) {
      this.setState({ exiting: true })
    }
  }

  handleBodyScroll = preventScroll => {
    if (this.props.preventBodyScrolling) {
      preventBodyScroll(preventScroll)
    }
  }

  handleEnter = () => {
    this.handleBodyScroll(true)
    safeInvoke(this.props.onEnter)
  }

  handleEntering = node => {
    document.body.addEventListener('keydown', this.onEsc, false)
    this.props.onEntering(node)
  }

  handleEntered = node => {
    this.previousActiveElement = document.activeElement
    this.bringFocusInsideOverlay()
    this.props.onEntered(node)
  }

  handleExit = () => {
    this.handleBodyScroll(false)
    safeInvoke(this.props.onExit)
  }

  handleExiting = node => {
    document.body.removeEventListener('keydown', this.onEsc, false)
    this.bringFocusBackToTarget()
    this.props.onExiting(node)
  }

  handleExited = node => {
    this.setState({ exiting: false, exited: true })
    this.props.onExited(node)
  }

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget || !this.props.shouldCloseOnClick) {
      return
    }

    this.close()
  }

  onContainerRef = ref => {
    this.containerElement = ref
  }

  render() {
    const { isShown, centerContent, children } = this.props

    const { exiting, exited } = this.state
    if (exited) return null

    return (
      <Portal>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown && !exiting}
          onExit={this.handleExit}
          onExiting={this.handleExiting}
          onExited={this.handleExited}
          onEnter={this.handleEnter}
          onEntering={this.handleEntering}
          onEntered={this.handleEntered}
        >
          {state => (
            <ScOverlay
              onClick={this.handleBackdropClick}
              centerContent={centerContent}
              ref={this.onContainerRef}
              data-state={state}
            >
              {typeof children === 'function'
                ? children({ state, close: this.close })
                : children}
            </ScOverlay>
          )}
        </Transition>
      </Portal>
    )
  }
}

export default withTheme(Overlay)