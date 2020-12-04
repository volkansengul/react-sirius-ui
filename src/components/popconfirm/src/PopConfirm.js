import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css, keyframes } from 'styled-components'
import { space } from 'styled-system'
import { Transition } from 'react-transition-group'

import { Button } from '../../../elements/button'
import { Text } from '../../../elements/typography'

const IconWarning = ({ fill }) => (
  <svg
    fill="none"
    height="24"
    stroke={fill}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12" y1="17" y2="17" />
  </svg>
)

const ANIMATION_DURATION = 200
const getZoomInAnimation = direction => {
  let result

  switch (direction) {
    case 'top':
      result = keyframes`
        0% {
          transform: scale(.2) translate(-50%, -100%);
          opacity: 0
        }

        100% {
          transform: scale(1) translate(-50%, -100%);
          opacity: 1
        }
      `
      break
    case 'right':
      result = keyframes`
        0% {
          transform: scale(.2) translate(100%, -50%);
          opacity: 0
        }

        100% {
          transform: scale(1) translate(100%, -50%);
          opacity: 1
        }
      `
      break
    case 'bottom':
      result = keyframes`
        0% {
          transform: scale(.2) translate(-50%, 100%);
          opacity: 0
        }

        100% {
          transform: scale(1) translate(-50%, 100%);
          opacity: 1
        }
      `
      break
    case 'left':
      result = keyframes`
        0% {
          transform: scale(.2) translate(-100%, -50%);
          opacity: 0
        }

        100% {
          transform: scale(1) translate(-100%, -50%);
          opacity: 1
        }
      `
      break
  }

  return result
}

const zoomOutAnimation = keyframes`
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(.2);
    opacity: 0
  }
`

const ScPopConfirmWrapper = styled.div`
  display: inline-block;
  position: relative;

  ${space}
`

const getDirectionalStyles = direction => {
  let result

  switch (direction) {
    case 'top':
      result = css`
        top: 0;
        left: 50%;
        margin-top: -1rem;

        &:after {
          border-top-color: #fff;
          margin-left: -0.5rem;

          top: calc(100% - 1px);
          left: 50%;
        }
      `
      break
    case 'right':
      result = css`
        top: 50%;
        right: 0;
        margin-right: -0.75rem;

        &:after {
          border-right-color: #fff;
          margin-top: -0.5rem;

          right: calc(100% - 1px);
          top: 50%;
        }
      `
      break
    case 'bottom':
      result = css`
        bottom: 0;
        left: 50%;
        margin-bottom: -0.75rem;

        &:after {
          border-bottom-color: #fff;
          margin-left: -0.5rem;

          bottom: calc(100% - 1px);
          left: 50%;
        }
      `
      break
    case 'left':
      result = css`
        top: 50%;
        left: 0;
        margin-left: -0.75rem;

        &:after {
          border-left-color: #fff;
          margin-top: -0.5rem;

          left: calc(100% - 1px);
          top: 50%;
        }
      `
      break
  }
  return result
}

const ScPopConfirm = styled.div`
  background-color: white;
  border-radius: ${p => p.theme.borderRadius};
  display: ${p => (p.show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem 1.25rem;
  position: absolute;
  min-width: 250px;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
    0 5px 8px -4px rgba(67, 90, 111, 0.47);

  &:after {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-width: 0.5rem;
  }

  ${p => getDirectionalStyles(p.direction)};

  &[data-state='entering'] {
    pointer-events: none;
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    transform: scale(0) translate(-50%, -100%);
    opacity: 0;

    animation: ${p => getZoomInAnimation(p.direction)} ${ANIMATION_DURATION}ms
      cubic-bezier(0.08, 0.82, 0.17, 1) both;
  }

  &[data-state='exiting'] {
    animation: ${zoomOutAnimation} ${ANIMATION_DURATION}ms
      cubic-bezier(0.08, 0.82, 0.17, 1) both;
    pointer-events: none;
  }
`

const ScPopConfirmHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`

const ScPopConfirmText = styled.div`
  color: ${p => p.theme.colors.slate};
  font-size: ${p => p.theme.fontSizeSm};
  line-height: 1.2;
  text-align: left;
`

const ScPopConfirmActions = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

class PopConfirm extends Component {
  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    this.state = {
      isShown: this.props.isShown || false,
    }
  }

  static propTypes = {
    /**
     * Sets the direction of Popconfirm component. Can be one of 'top', 'right', 'bottom', 'left'
     */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * Set true to show by default.
     */
    isShown: PropTypes.bool,
    /**
     * Text of confirm button
     */
    okButtonText: PropTypes.string,
    /**
     * Text of cancel button text
     */
    cancelButtonText: PropTypes.string,
    /**
     * Contextual color option.
     */
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ]),
  }

  static defaultProps = {
    direction: 'top',
    isShown: false,
    okButtonText: 'Ok',
    cancelButtonText: 'Cancel',
    variant: 'secondary',
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleShow = () => {
    this.setState({ isShown: true })
  }

  handleConfirm = () => {
    this.setState({ isShown: false })
    this.props.onResult(true)
  }

  handleCancel = () => {
    this.setState({ isShown: false })
    this.props.onResult(false)
  }

  handlePopConfirmClick = event => {
    event.stopPropagation()
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isShown: false })
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    const { isShown } = this.state
    const {
      title,
      direction,
      okButtonText,
      cancelButtonText,
      variant,
      theme,
    } = this.props

    return (
      <ScPopConfirmWrapper onClick={this.handleShow} ref={this.setWrapperRef}>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown}
        >
          {state => (
            <ScPopConfirm
              data-state={state}
              direction={direction}
              show={isShown}
              onClick={e => this.handlePopConfirmClick(e)}
              theme={theme}
            >
              <ScPopConfirmHeader theme={theme}>
                <Text color={variant} mr={3} fontSize="1.5rem">
                  <IconWarning fill={theme.colors.danger} />
                </Text>
                <ScPopConfirmText>{title}</ScPopConfirmText>
              </ScPopConfirmHeader>
              <ScPopConfirmActions>
                <Button
                  size="sm"
                  variant="light"
                  mr={1}
                  onClick={this.handleCancel}
                >
                  {cancelButtonText}
                </Button>
                <Button
                  size="sm"
                  variant={variant}
                  onClick={this.handleConfirm}
                >
                  {okButtonText}
                </Button>
              </ScPopConfirmActions>
            </ScPopConfirm>
          )}
        </Transition>

        {this.props.children}
      </ScPopConfirmWrapper>
    )
  }
}
PopConfirm.displayName = 'PopConfirm'

export default withTheme(PopConfirm)
