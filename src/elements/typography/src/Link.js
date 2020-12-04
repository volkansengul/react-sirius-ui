import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'
import { darken, rgba } from 'polished'

const getVariantStyle = (variant, p) => {
  return css`
    border-bottom: 1px solid ${rgba(p.theme.colors[variant], 0.35)};
    color: ${p.theme.colors[variant]};

    &:hover {
      border-color: ${p.theme.colors[variant]};
      color: ${darken(0.1, p.theme.colors[variant])};
    }
  `
}

const Link = styled.a`
  font-size: ${p => p.theme.fontSizeBase};
  text-decoration: none;
  transition: color 0.15s, border-color 0.15s;

  ${p => getVariantStyle(p.variant, p)};
  ${space}

  &:hover {
    text-decoration: none;
  }
`
Link.displayName = 'Link'
Link.propTypes = {
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
  ...space.propTypes,
}

Link.defaultProps = {
  variant: 'primary',
}

export default withTheme(Link)
