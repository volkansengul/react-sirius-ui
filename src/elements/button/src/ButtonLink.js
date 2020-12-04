import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { Spinner } from '../../../components/spinner'
import { transitionBase } from '../../../theming'

const sizeStyles = {
  sm: p => css`
    font-size: ${p.theme.fontSizeSm};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeightSm};
  `,
  md: p => css`
    font-size: ${p.theme.fontSizeBase};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeight};
  `,
  lg: p => css`
    font-size: ${p.theme.fontSizeLg};
    border-radius: ${p.theme.borderRadiusLg};
    line-height: ${p.theme.btnLineHeightLg};
  `,
}

const ScButton = styled.button`
  display: inline-block;
  border-width: ${p => p.theme.btnBorderWidth};
  font-family: ${p => p.theme.fontFamily};
  background-color: transparent;
  border: none;
  outline: none;
  color: ${p => p.theme.colors[p.variant]};
  cursor: pointer;

  ${p => transitionBase(p)};
  ${p => sizeStyles[p.size](p)};

  ${p =>
    p.loading &&
    `
      opacity: ${p.theme.btnDisabledOpacity};
      cursor: not-allowed;
    `}

  /* When used as link */
  text-decoration: none;

  &:active,
  &:focus {
    background-color: ${p => p.theme.tints[p.variant]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${p => p.theme.btnDisabledOpacity};
  }

  ${space}
`

function createStyledComponent(variant, size, loading, props) {
  return (
    <ScButton variant={variant} size={size} disabled={loading} {...props}>
      {loading && (
        <>
          <Spinner mr={1} /> Yükleniyor
        </>
      )}
      {!loading && props.children}
    </ScButton>
  )
}

class ButtonLink extends PureComponent {
  static propTypes = {
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ]),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    loading: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    size: 'md',
    loading: false,
  }

  render() {
    const { variant, size, loading, ...buttonProps } = this.props

    return createStyledComponent(variant, size, loading, ...buttonProps)
  }
}
ButtonLink.displayName = 'Button'

export default withTheme(ButtonLink)
