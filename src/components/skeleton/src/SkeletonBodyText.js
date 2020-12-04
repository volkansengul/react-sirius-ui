import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes } from 'styled-components'
import { space } from 'styled-system'
import { lighten, darken } from 'polished'

const bgGradientAnimation = keyframes`
  0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`

const ScSkeletonContainer = styled.div`
  ${space}
`

const ScSkeletonLine = styled.div`
  height: 0.875rem;
  position: relative;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:last-child:not(:first-child) {
    width: 80%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: 0.2rem;

    background: linear-gradient(
      -45deg,
      ${p => lighten(0.05, p.theme.colors.smoke)},
      ${p => p.theme.colors.smoke},
      ${p => darken(0.05, p.theme.colors.smoke)}
    );
    background-size: 400% 400%;
    animation: ${bgGradientAnimation} 2s ease infinite;
  }
`

class SkeletonBodyText extends PureComponent {
  static propTypes = {
    /**
     * How many lines will be rendered.
     */
    lines: PropTypes.number,
    ...space.propTypes,
  }

  static defaultProps = {
    lines: 3,
  }

  render() {
    const { lines, theme, ...props } = this.props
    const linesArray = Array.from(Array(lines).keys())

    return (
      <ScSkeletonContainer theme={theme} {...props}>
        {linesArray.map((e, i) => (
          <ScSkeletonLine theme={theme} key={i} />
        ))}
      </ScSkeletonContainer>
    )
  }
}

export default withTheme(SkeletonBodyText)
