import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes, css } from 'styled-components'
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

const ScDropdown = styled.div`
  display: inline-block;
  position: relative;
`

const ScDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};
  position: absolute;
  z-index: 12;

  ${Elevations[1]};
  ${p => getDirectionalStyles(p.placement)};

  min-width: ${p => p.width}px;

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

class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Width of the Dropdown.
     */
    width: PropTypes.number,

    /**
     * Boolean indicating if pressing the esc key should close the dropdown menu.
     */
    shouldCloseOnEscape: PropTypes.bool,

    /**
     * Positioning of the Dropdown.
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
  }

  static defaultProps = {
    isShown: false,
    width: 200,
    placement: 'bottom-right',
    shouldCloseOnEscape: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      isShown: this.props.isShown || false,
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
    document.body.addEventListener('keydown', this.onEsc, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleShow = () => {
    this.setState({ isShown: true })
  }

  handleHide = () => {
    this.setState({ isShown: false })
  }

  handleToggle = () => {
    const { isShown } = this.state
    this.setState({ isShown: !isShown })
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false })
    }
  }

  onEsc = e => {
    // Esc key
    if (e.keyCode === 27 && this.props.shouldCloseOnEscape) {
      this.handleHide()
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    const { isShown } = this.state
    const { children, content, width, placement } = this.props

    return (
      <ScDropdown onClick={this.handleToggle} ref={this.setWrapperRef}>
        {children}

        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown}
        >
          {state => (
            <>
              {isShown && (
                <ScDropdownContent
                  role="menu"
                  data-state={state}
                  width={width}
                  placement={placement}
                >
                  {typeof content === 'function'
                    ? content({ close: this.handleHide })
                    : content}
                </ScDropdownContent>
              )}
            </>
          )}
        </Transition>
      </ScDropdown>
    )
  }
}

Dropdown.displayName = 'Dropdown'
export default withTheme(Dropdown)
