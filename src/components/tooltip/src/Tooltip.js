import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css, keyframes } from 'styled-components'
import { Transition } from 'react-transition-group'
import { space } from 'styled-system'

const ANIMATION_DURATION = 200

const getZoomInAnimation = direction => {
  let result

  switch (direction) {
    case 'top':
      result = keyframes`
        0% {
          transform: scale(.5) translate(-50%, -100%);
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
          transform: scale(.5) translate(100%, -50%);
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
          transform: scale(.5) translate(-50%, 100%);
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
          transform: scale(.5) translate(-100%, -50%);
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
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const getDirectionalStyles = direction => {
  let result

  switch (direction) {
    case 'top':
      result = css`
        top: 0;
        left: 50%;
        margin-top: -0.75rem;
        transform: translate(-50%, -100%);

        &:after {
          border-top-color: rgba(0, 0, 0, 0.65);
          margin-left: -4px;

          top: 100%;
          left: 50%;
        }
      `
      break
    case 'right':
      result = css`
        top: 50%;
        right: 0;
        margin-right: -0.75rem;
        transform: translate(100%, -50%);

        &:after {
          border-right-color: rgba(0, 0, 0, 0.65);
          margin-top: -4px;

          right: 100%;
          top: 50%;
        }
      `
      break
    case 'bottom':
      result = css`
        bottom: 0;
        left: 50%;
        margin-bottom: -0.75rem;
        transform: translate(-50%, 100%);

        &:after {
          border-bottom-color: rgba(0, 0, 0, 0.65);
          margin-left: -4px;

          bottom: 100%;
          left: 50%;
        }
      `
      break
    case 'left':
      result = css`
        top: 50%;
        left: 0;
        margin-left: -0.75rem;
        transform: translate(-100%, -50%);

        &:after {
          border-left-color: rgba(0, 0, 0, 0.65);
          margin-top: -4px;

          left: 100%;
          top: 50%;
        }
      `
      break
  }
  return result
}

const ScTooltipWrapper = styled.div`
  position: relative;
  display: inline;

  ${space}
`

const ScTooltip = styled.div`
  font-size: ${p => p.theme.fontSizeSm};
  padding: 0.5rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 0.2rem;
  color: ${p => p.theme.colors.white};

  z-index: 10;
  position: absolute;
  min-width: 60px;
  max-width: 250px;
  display: table;
  text-align: center;
  line-height: 1.2;

  :after {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-width: 5px;
  }

  ${p => getDirectionalStyles(p.direction)};

  &[data-state='entering'] {
    pointer-events: none;
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${p => getZoomInAnimation(p.direction)} ${ANIMATION_DURATION}ms
      cubic-bezier(0.08, 0.82, 0.17, 1) both;
  }

  &[data-state='exiting'] {
    animation: ${zoomOutAnimation} ${ANIMATION_DURATION}ms
      cubic-bezier(0.08, 0.82, 0.17, 1) both;
  }
`

class Tooltip extends PureComponent {
  static propTypes = {
    /**
     * Elements that you want to apply tooltip
     */
    children: PropTypes.node,
    /**
     * Where to show the tooltip
     */
    direction: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    /**
     * Set the content of tooltip. Can be a simple string or html.
     */
    content: PropTypes.node,
    /**
     * styled-system props
     */
    ...space.propTypes,
  }

  static defaultProps = {
    direction: 'top',
  }

  constructor(props) {
    super(props)

    this.state = {
      isShown: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ isShown: true })
  }

  handleMouseLeave = () => {
    this.setState({ isShown: false })
  }

  render() {
    const { children, direction, content, theme, ...props } = this.props
    const { isShown } = this.state

    return (
      <ScTooltipWrapper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        theme={theme}
        {...props}
      >
        <Transition
          appear
          unmountOnExit
          timeout={ANIMATION_DURATION}
          in={isShown}
        >
          {state => (
            <ScTooltip data-state={state} theme={theme} direction={direction}>
              <div>{content}</div>
            </ScTooltip>
          )}
        </Transition>

        {children}
      </ScTooltipWrapper>
    )
  }
}
Tooltip.displayName = 'Tooltip'

export default withTheme(Tooltip)
