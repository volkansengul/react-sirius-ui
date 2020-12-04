import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes, css } from 'styled-components'
import { space } from 'styled-system'
import { Transition } from 'react-transition-group'

import { Elevations } from '../../../constants'

const ANIMATION_DURATION = 200
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const openAnimation = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`

const getDirectionalStyles = direction => {
  switch (direction) {
    case 'right-top':
      return css`
        left: 100%;
        top: 0;
        margin-left: 0.5rem;
      `
    case 'right-bottom':
      return css`
        left: 100%;
        bottom: 0;
        margin-left: 0.5rem;
      `

    case 'left-top':
      return css`
        right: 100%;
        top: 0;
        margin-right: 0.5rem;
      `

    case 'left-bottom':
      return css`
        right: 100%;
        bottom: 0;
        margin-right: 0.5rem;
      `
    case 'bottom-left':
      return css`
        top: 100%;
        left: 0;
        margin-top: 0.5rem;
      `

    case 'bottom-right':
      return css`
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
      `

    case 'top-left':
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: 0.5rem;
      `

    case 'top-right':
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: 0.5rem;
      `
  }

  return css`
    margin-top: 0.5rem;
  `
}

const ScPopover = styled.div`
  display: inline-block;
  position: relative;

  ${space}
`

const ScPopoverContent = styled.div`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};
  position: absolute;
  z-index: 12;
  min-width: ${p => p.width}px;

  ${Elevations[1]};
  ${p => getDirectionalStyles(p.placement)};

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
    visibility: visible;
  }

  &[data-state='exiting'],
  &[data-state='exited'] {
    animation: ${closeAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class Popover extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * When true, the popover is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Width of the Popover.
     */
    width: PropTypes.number,
    /**
     * Positioning of the Popover
     */
    placement: PropTypes.oneOf([
      'left-top',
      'left-bottom',
      'right-top',
      'right-bottom',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ]),
    ...space.propTypes,
  }

  static defaultProps = {
    isShown: false,
    width: 200,
    placement: 'bottom-left',
  }

  constructor(props) {
    super(props)

    this.state = {
      isShown: this.props.isShown || false,
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.setContentRef = this.setContentRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleToggle = event => {
    const { isShown } = this.state

    if (
      !this.contentRef ||
      (this.contentRef && !this.contentRef.contains(event.target))
    ) {
      this.setState({ isShown: !isShown })
    }
  }

  handleHide = () => {
    this.setState({ isShown: false })
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false })
    }
  }

  handleEntering = () => {
    document.body.addEventListener('keydown', this.onEsc, false)
  }

  handleExiting = () => {
    document.body.removeEventListener('keydown', this.onEsc, false)
  }

  onEsc = e => {
    // Esc key
    if (e.keyCode === 27) {
      this.handleHide()
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  setContentRef(node) {
    this.contentRef = node
  }

  render() {
    const { isShown } = this.state
    const { children, content, width, placement, ...props } = this.props

    return (
      <ScPopover
        onClick={this.handleToggle}
        ref={this.setWrapperRef}
        {...props}
      >
        {children}

        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          onExiting={this.handleExiting}
          onEntering={this.handleEntering}
          in={isShown}
        >
          {state => (
            <>
              {isShown && (
                <ScPopoverContent
                  data-state={state}
                  width={width}
                  placement={placement}
                  ref={this.setContentRef}
                >
                  {typeof content === 'function'
                    ? content({ close: this.handleHide })
                    : content}
                </ScPopoverContent>
              )}
            </>
          )}
        </Transition>
      </ScPopover>
    )
  }
}

Popover.displayName = 'Popover'
export default withTheme(Popover)
