import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { colorYik } from '../../../theming/color'

const sizeStyles = {
  sm: p => css`
    padding: 0.4rem 0.5rem;
    font-size: ${p.theme.fontSizeSm};
  `,
  md: p => css`
    padding: 0.5rem 0.75rem;
    font-size: ${p.theme.fontSizeBase};
  `,
  lg: () => css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
}

const ScMenuItem = styled.button`
  background-color: transparent;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  font-size: ${p => p.theme.fontSizeBase};
  outline: none;
  cursor: pointer;
  text-align: left;
  line-height: 1.5;
  display: block;
  width: 100%;
  box-shadow: none;
  color: ${p => p.theme.colors.shaft};
  padding: 0.5rem 0.75rem;
  transition: color 0.15s, background-color 0.15s;
  text-decoration: none;

  ${p => sizeStyles[p.size]};

  & svg {
    color: ${p => p.theme.colors[p.variant]};
  }

  &:hover {
    background-color: ${p => p.theme.tints[p.variant]};
    text-decoration: none;
  }

  &:active {
    background-color: ${p => p.theme.colors[p.variant]};
    color: ${p => colorYik(p.theme.colors[p.variant])(p)};
  }

  &:active svg {
    color: ${p => colorYik(p.theme.colors[p.variant])(p)};
  }
`

class MenuItem extends PureComponent {
  static propTypes = {
    /**
     * Contextual color option.
     */
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
  }

  static defaultProps = {
    variant: 'primary',
  }

  render() {
    const { variant, size, children, ...props } = this.props

    return (
      <ScMenuItem variant={variant} size={size} {...props}>
        {children}
      </ScMenuItem>
    )
  }
}

export default withTheme(MenuItem)
