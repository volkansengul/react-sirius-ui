import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'

import { Spinner } from '../../../components/spinner'
import { transitionBase } from '../../../theming'
import { btnIconVariant } from '../../../theming/button'

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.btnPaddingYSm} ${p.theme.btnPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeightSm};
  `,
  md: p => css`
    padding: ${p.theme.btnPaddingY} ${p.theme.btnPaddingX};
    font-size: ${p.theme.fontSizeBase};
    border-radius: ${p.theme.borderRadiusSm};
    line-height: ${p.theme.btnLineHeight};
  `,
  lg: p => css`
    padding: ${p.theme.btnPaddingYLg} ${p.theme.btnPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    border-radius: ${p.theme.borderRadiusLg};
    line-height: ${p.theme.btnLineHeightLg};
  `,
}

const ScButton = styled.button`
  display: inline-block;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.smoke};
  font-family: ${p => p.theme.fontFamily};
  cursor: pointer;

  ${p => transitionBase(p)};
  ${p => btnIconVariant(p.variant)(p)};
  ${p => sizeStyles[p.size](p)};

  ${p =>
    p.loading &&
    `
      opacity: ${p.theme.btnDisabledOpacity};
      cursor: not-allowed;
    `}

  /* When used as link */
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    opacity: ${p => p.theme.btnDisabledOpacity};
  }

  & svg {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
  }

  ${space}
`

function createStyledComponent(variant, size, loading, props) {
  return (
    <ScButton
      variant={variant}
      size={size}
      loading={loading}
      disabled={loading}
      {...props}
    >
      {loading && (
        <>
          <Spinner mr={1} /> Yükleniyor
        </>
      )}
      {!loading && props.children}
    </ScButton>
  )
}

class ButtonIcon extends PureComponent {
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
ButtonIcon.displayName = 'ButtonIcon'

export default withTheme(ButtonIcon)
