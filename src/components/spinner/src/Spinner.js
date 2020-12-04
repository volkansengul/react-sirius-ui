import React, { PureComponent } from 'react'
import styled, { withTheme, css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { space, color } from 'styled-system'

const loadingKeyframes = keyframes`
  0% {
    transform: rotate(0)
  }
  100%: {
    transform: rotate(360deg)
  }
`

const loadingCircleKeyframes = keyframes`
  0% {
    stroke-dashoffset: 600
  }
  100% {
    stroke-dashoffset: 0
  }
`

const ScSpinnerContainer = styled.span`
  display: inline-block;
  height: 1em;
  width: 1em;

  ${p =>
    p.size &&
    css`
      height: ${p.size}px;
      width: ${p.size}px;
    `}

  ${color};
  ${space};
`

const ScSpinner = styled.svg`
  animation: ${loadingKeyframes} 2s linear infinite;
`

const ScSpinnerCircle = styled.circle`
  stroke-dashoffset: 600;
  stroke-dasharray: 300;
  stroke-width: 20;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  stroke: currentColor;
  fill: transparent;
  animation: ${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85)
    infinite;
`

class Spinner extends PureComponent {
  static propTypes = {
    /**
     * Delay after which spinner should be visible.
     */
    delay: PropTypes.number,

    /**
     * The size of the spinner.
     */
    size: PropTypes.number,
    ...space.propTypes,
    ...color.propTypes,
  }

  static defaultProps = {
    delay: 0,
  }

  constructor({ delay }) {
    super()

    this.state = {
      isVisible: delay === 0,
    }
  }

  componentDidMount() {
    const { delay } = this.props

    if (delay > 0) {
      this.delayTimer = setTimeout(() => {
        this.setState({
          isVisible: true,
        })
      }, delay)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimer)
  }

  render() {
    if (!this.state.isVisible) {
      return null
    }

    const { size, theme, ...props } = this.props
    return (
      <ScSpinnerContainer theme={theme} size={size} {...props}>
        <ScSpinner x="0px" y="0px" viewBox="0 0 150 150">
          <ScSpinnerCircle cx="75" cy="75" r="60" />
        </ScSpinner>
      </ScSpinnerContainer>
    )
  }
}
Spinner.displayName = 'Spinner'

export default withTheme(Spinner)
