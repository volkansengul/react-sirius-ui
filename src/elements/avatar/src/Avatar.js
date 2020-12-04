import styled, { css, withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { borderRadius, space } from 'styled-system'

const getSizeStyles = p => {
  return css`
    height: ${p.theme.avatarSizes[p.size]};
    width: ${p.theme.avatarSizes[p.size]};
  `
}

const Avatar = styled.img`
  border-radius: ${p => p.theme.borderRadius};

  ${p => getSizeStyles(p)};
  ${borderRadius}
  ${space}
`

Avatar.displayName = 'Avatar'
Avatar.defaultProps = {
  size: 'md',
}
Avatar.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ...borderRadius.propTypes,
  ...space.propTypes,
}

export default withTheme(Avatar)
