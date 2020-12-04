import React, { PureComponent } from 'react'
import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { borderRadius, space } from 'styled-system'
import { rgba } from 'polished'

const sizeStyles = {
  xs: () => css`
    font-size: 0.875rem;
  `,
  sm: () => css`
    font-size: 1rem;
  `,
  md: () => css`
    font-size: 2.5rem;
  `,
  lg: () => css`
    font-size: 5rem;
  `,
  xl: () => css`
    font-size: 8rem;
  `,
}

const getVariantStyle = (variant, p) => {
  return css`
    background-color: ${p.theme.tints[variant]};
    border: 1px solid ${rgba(p.theme.colors[variant], 0.5)};
    color: ${p.theme.colors[variant]};
  `
}

function createStyledComponent(variant, size, initials, props) {
  const variantStyle = getVariantStyle(variant, props)
  const sizeStyle = sizeStyles[size]

  const ScAvatar = styled.span`
    border-radius: ${p => p.theme.borderRadius};
    display: inline-block;
    font-family: ${p => p.theme.fontFamilyBase};
    font-size: 2rem;
    font-weight: 500;
    height: ${p => p.theme.avatarSizes[size]};
    line-height: ${p => p.theme.avatarSizes[size]};
    width: ${p => p.theme.avatarSizes[size]};
    text-align: center;
    text-transform: uppercase;
    user-select: none;

    ${sizeStyle}
    ${variantStyle}
    ${borderRadius}
    ${space}
  `

  return <ScAvatar {...props}>{initials}</ScAvatar>
}

class AvatarInitials extends PureComponent {
  static propTypes = {
    initials: PropTypes.string,
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'dark',
    ]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    ...borderRadius.propTypes,
    ...space.propTypes,
  }

  static defaultProps = {
    initials: 'EK',
    variant: 'primary',
    size: 'md',
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.size,
      this.props.initials,
      ...this.props,
    )
  }
}
AvatarInitials.displayName = 'AvatarInitials'

export default withTheme(AvatarInitials)
