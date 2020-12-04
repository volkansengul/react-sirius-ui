import React, { PureComponent } from 'react'
import styled, { withTheme, keyframes } from 'styled-components'
import { space, width, height, borderRadius } from 'styled-system'
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

const ScSkeletonThumbnail = styled.div`
  position: relative;
  display: inline-block;

  ${space}
  ${width}
  ${height}

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: 0.2rem;

    ${borderRadius}

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

class SkeletonThumbnail extends PureComponent {
  static propTypes = {
    ...borderRadius.propTypes,
    ...height.propTypes,
    ...width.propTypes,
    ...space.propTypes,
  }

  static defaultProps = {
    height: 100,
    width: 100,
  }

  render() {
    const { theme, ...props } = this.props

    return <ScSkeletonThumbnail theme={theme} {...props} />
  }
}

export default withTheme(SkeletonThumbnail)
