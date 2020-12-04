import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

import { Overlay } from '../../overlay'

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const openAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
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
    transform: scale(0.8);
    opacity: 0;
  }
`

const ScDialogWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
    0 8px 10px -4px rgba(67, 90, 111, 0.47);

  /* width: ${p => p.width}px; */
  max-width: ${p => p.width}px;
  max-height: ${p => p.maxHeight};
  margin: ${p => p.marginY} ${p => p.marginX};

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting'],
  &[data-state='exited'] {
    animation: ${closeAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

const ScDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 1rem;
`

const ScDialogHeader = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.smoke};
  border-top-left-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
  display: flex;
  align-items: center;
  padding: 1rem;
`

const ScDialogFooter = styled.div`
  background-color: ${p => p.theme.colors.snow};
  border-top: 1px solid ${p => p.theme.colors.smoke};
  border-bottom-left-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`

class Dialog extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool,

    /**
     * Function that will be called when the exit transition is complete.
     */
    onCloseComplete: PropTypes.func,

    /**
     * Function that will be called when the enter transition is complete.
     */
    onOpenComplete: PropTypes.func,

    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick: PropTypes.bool,

    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress: PropTypes.bool,

    /**
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The space above the dialog.
     * This offset is also used at the bottom when there is not enough vertical
     * space available on screen — and the dialog scrolls internally.
     */
    topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The space on the left/right sides of the dialog when there isn't enough
     * horizontal space available on screen.
     */
    sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The min height of the body content.
     * Makes it less weird when only showing little content.
     */
    minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Whether or not to prevent scrolling in the outer body
     */
    preventBodyScrolling: PropTypes.bool,
  }

  static defaultProps = {
    isShown: false,
    width: 560,
    topOffset: '12vmin',
    sideOffset: '16px',
    minHeightContent: 80,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEscapePress: true,
    preventBodyScrolling: false,
  }

  render() {
    const {
      isShown,
      topOffset,
      sideOffset,
      onCloseComplete,
      onOpenComplete,
      header,
      footer,
      children,
    } = this.props
    const { width, minHeightContent } = this.props
    const {
      shouldCloseOnOverlayClick,
      shouldCloseOnEscapePress,
      preventBodyScrolling,
    } = this.props

    const sideOffsetWithUnit = Number.isInteger(sideOffset)
      ? `${sideOffset}px`
      : sideOffset
    const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`

    const topOffsetWithUnit = Number.isInteger(topOffset)
      ? `${topOffset}px`
      : topOffset
    const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`

    return (
      <Overlay
        isShown={isShown}
        centerContent
        shouldCloseOnClick={shouldCloseOnOverlayClick}
        shouldCloseOnEscapePress={shouldCloseOnEscapePress}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
        preventBodyScrolling={preventBodyScrolling}
      >
        {({ state, close }) => (
          <ScDialogWrapper
            role="dialog"
            data-state={state}
            width={width}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            marginX={sideOffsetWithUnit}
            marginY={topOffsetWithUnit}
          >
            {header && (
              <ScDialogHeader>
                {typeof header === 'function' ? header({ close }) : header}
              </ScDialogHeader>
            )}

            <ScDialogContent minHeight={minHeightContent}>
              {typeof children === 'function' ? children({ close }) : children}
            </ScDialogContent>

            {footer && (
              <ScDialogFooter>
                {typeof footer === 'function' ? footer({ close }) : footer}
              </ScDialogFooter>
            )}
          </ScDialogWrapper>
        )}
      </Overlay>
    )
  }
}
Dialog.displayName = 'Dialog'

export default withTheme(Dialog)
