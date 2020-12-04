import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const getVariantStyle = (variant, p) => {
  return css`
    background-color: ${p.theme.tints[variant]};
    border: 1px solid ${p.theme.tints[variant]};
    color: ${p.theme.colors[variant]};
  `
}

function createStyledComponent(variant, children, props) {
  const variantStyle = variant ? getVariantStyle(variant, props) : null

  const ScTag = styled.span`
    background-color: transparent;
    border: 1px solid ${p => p.theme.colors.smoke};
    border-radius: ${p => p.theme.borderRadius};
    color: ${p => p.theme.colors.slate};
    font-family: ${p => p.theme.fontFamilyBase};
    font-weight: 500;
    font-size: ${p => p.theme.fontSizeSm};
    line-height: normal;
    padding: 0rem 0.5rem;
    text-transform: uppercase;

    ${variantStyle}
    ${space}
  `

  return <ScTag {...props}>{children}</ScTag>
}

class Tag extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'dark',
    ]),
    ...space.propTypes,
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.children,
      ...this.props,
    )
  }
}
Tag.displayName = 'Tag'

export default withTheme(Tag)
