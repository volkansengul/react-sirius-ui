import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'
import { lighten } from 'polished'

const Code = styled.code`
  background-color: ${p => p.theme.tints.primary};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0 0 0 1px ${p => lighten(0.4, p.theme.brand.primary)};
  color: ${p => p.theme.brand.primary};
  font-family: ${p => p.theme.fontFamilyMonospace};
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 500;
  padding: 1px 2px;

  ${space}
`
Code.displayName = 'Code'
Code.propTypes = {
  ...space.propTypes,
}

export default withTheme(Code)
