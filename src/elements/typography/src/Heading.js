import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space, typography } from 'styled-system'

const variantTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h2',
  'display-3': 'h3',
  'display-4': 'h4',
}

const commonHeadingStyle = p => {
  const fontFamily = p.theme.headingsFontFamily

  return css`
    margin-top: 0;
    margin-bottom: ${p.theme.headingsMarginBottom};
    font-weight: ${p.theme.headingsFontWeight};
    line-height: ${p.theme.headingsLineHeight};
    color: ${p.theme.headingsColor};
    ${fontFamily && `font-family: ${fontFamily}`};
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
  'display-1': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.display1Size};
    font-weight: ${p.theme.display1Weight};
    line-height: ${p.theme.displayLineHeight};
  `,
  'display-2': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.display2Size};
    font-weight: ${p.theme.display2Weight};
    line-height: ${p.theme.displayLineHeight};
  `,
  'display-3': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.display3Size};
    font-weight: ${p.theme.display3Weight};
    line-height: ${p.theme.displayLineHeight};
  `,
  'display-4': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${p.theme.display4Size};
    font-weight: ${p.theme.display4Weight};
    line-height: ${p.theme.displayLineHeight};
  `,
}

function createStyledComponent(variant, children, props) {
  const element = variantTags[variant]
  const style = variantStyles[variant](props)
  const ScHeading = styled[element]`
    ${style}
    ${space}
    ${typography}
  `

  return <ScHeading {...props}>{children}</ScHeading>
}

class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'display-1',
      'display-2',
      'display-3',
      'display-4',
    ]),
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

export default withTheme(Heading)
