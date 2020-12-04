import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css, keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
import { space, width } from 'styled-system'

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

const commonHeadingStyle = p => {
  return css`
    margin-top: 0;
    margin-bottom: ${p.theme.headingsMarginBottom};
    line-height: ${p.theme.headingsLineHeight};
    height: calc(${p.theme.headingsLineHeight}em);
    position: relative;
    min-width: 100px;
    width: 200px;

    ${space}
    ${width}

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
        ${lighten(0.05, p.theme.colors.smoke)},
        ${p.theme.colors.smoke},
        ${darken(0.05, p.theme.colors.smoke)}
      );
      background-size: 400% 400%;
      animation: ${bgGradientAnimation} 2s ease infinite;
    }
  `
}

const variantStyles = {
  h1: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h1FontSize};
  `,
  h2: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h2FontSize};
  `,
  h3: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h3FontSize};
  `,
  h4: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h4FontSize};
  `,
  h5: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h5FontSize};
  `,
  h6: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.h6FontSize};
  `,
}

function createStyledComponent(variant, children, props) {
  const style = variantStyles[variant](props)
  const ScSkeletonHeading = styled.div`
    ${style}
  `

  return <ScSkeletonHeading {...props} />
}

class SkeletonHeading extends PureComponent {
  static propTypes = {
    /**
     * Set the same height with heading elements.
     */
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    ...width.propTypes,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'h1',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.children,
      this.props,
    )
  }
}

export default withTheme(SkeletonHeading)
