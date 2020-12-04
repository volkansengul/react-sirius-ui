import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes } from 'styled-components'
import { Transition } from 'react-transition-group'

import { Portal } from '../../portal'
import { Button, Paragraph, Heading } from '../../..'

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const openAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
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

const ScCornerDialog = styled.div`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
    0 8px 10px -4px rgba(67, 90, 111, 0.47);
  padding: 2rem;

  position: fixed;
  bottom: 1rem;
  left: 1rem;

  width: ${p => p.width}px;

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.spring} both;
  }

  &[data-state='exiting'] {
    animation: ${closeAnimation} 120ms ${animationEasing.acceleration} both;
  }
`

const ScCornerDialogHeader = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

const ScCornerDialogContent = styled.div`
  overflow-y: auto;
`

const ScCornerDialogFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ScCornerDialogClose = styled.span`
  color: ${p => p.theme.colors.slate};
  display: inline-block;
  margin-left: auto;
  border-radius: ${p => p.theme.borderRadius};
  cursor: pointer;
  padding: 0 0.5rem;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${p => p.theme.colors.smoke};
  }
`

class CornerDialog extends PureComponent {
  static propTypes = {
    /**
     * Children can be a string, node or a function accepting `({ close })`.
     * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * The intent of the CornerDialog. Used for the button.
     */
    variant: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),

    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Title of the Dialog. Titles should use Title Case.
     */
    title: PropTypes.node,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func,

    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: PropTypes.func,

    /**
     * When true, the footer with the cancel and confirm button is shown.
     */
    hasFooter: PropTypes.bool,

    /**
     * Function that will be called when the confirm button is clicked.
     * This does not close the Dialog. A close function will be passed
     * as a paramater you can use to close the dialog.
     *
     * `onConfirm={(close) => close()}`
     */
    onConfirm: PropTypes.func,

    /**
     * Label of the confirm button.
     */
    confirmLabel: PropTypes.string,

    /**
     * When true, the cancel button is shown.
     */
    hasCancel: PropTypes.bool,

    /**
     * When true, the close button is shown.
     */
    hasClose: PropTypes.bool,

    /**
     * Function that will be called when the cancel button is clicked.
     * This closes the Dialog by default.
     *
     * `onCancel={(close) => close()}`
     */
    onCancel: PropTypes.func,

    /**
     * Label of the cancel button.
     */
    cancelLabel: PropTypes.string,

    /**
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    width: 400,
    variant: 'info',
    hasFooter: true,
    confirmLabel: 'Learn More',
    hasCancel: true,
    hasClose: true,
    cancelLabel: 'Close',
    onCancel: close => close(),
    onConfirm: close => close(),
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
      this.setState({
        exited: false,
      })
    }
  }

  handleExited = () => {
    this.setState({ exiting: false, exited: true })
    this.props.onCloseComplete()
  }

  handleCancel = () => {
    this.props.onCancel(this.handleClose)
  }

  handleClose = () => {
    this.setState({ exiting: true })
  }

  handleConfirm = () => {
    this.props.onConfirm(this.handleClose)
  }

  renderChildren = () => {
    const { children } = this.props
    if (typeof children === 'function') {
      return children({ close: this.handleClose })
    }

    if (typeof children === 'string') {
      return <Paragraph color="slate">{children}</Paragraph>
    }

    return children
  }

  render() {
    const {
      title,
      width,
      variant,
      isShown,
      hasFooter,
      hasCancel,
      hasClose,
      cancelLabel,
      confirmLabel,
      onOpenComplete,
    } = this.props

    const { exiting, exited } = this.state

    if (exited) return null

    return (
      <Portal>
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown && !exiting}
          onExited={this.handleExited}
          onEntered={onOpenComplete}
        >
          {state => (
            <ScCornerDialog role="dialog" data-state={state} width={width}>
              <ScCornerDialogHeader>
                <Heading variant="h5" m={0} p={0}>
                  {title}
                </Heading>
                {hasClose && (
                  <ScCornerDialogClose onClick={this.handleClose}>
                    X
                  </ScCornerDialogClose>
                )}
              </ScCornerDialogHeader>

              <ScCornerDialogContent data-state={state}>
                {this.renderChildren()}
              </ScCornerDialogContent>

              {hasFooter && (
                <ScCornerDialogFooter>
                  {hasCancel && (
                    <Button
                      type="button"
                      variant="light"
                      onClick={this.handleCancel}
                    >
                      {cancelLabel}
                    </Button>
                  )}
                  <Button variant={variant} ml={2} onClick={this.handleConfirm}>
                    {confirmLabel}
                  </Button>
                </ScCornerDialogFooter>
              )}
            </ScCornerDialog>
          )}
        </Transition>
      </Portal>
    )
  }
}
CornerDialog.displayName = 'CornerDialog'

export default withTheme(CornerDialog)
