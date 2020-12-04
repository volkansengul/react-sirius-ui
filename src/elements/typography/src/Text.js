import styled, { withTheme } from 'styled-components'
import { space, display, color, typography } from 'styled-system'

const Text = styled.span`
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.fontSizeBase};
  line-height: ${p => p.theme.lineHeightBase};

  ${space}
  ${display}
  ${color}
  ${typography}
`

Text.displayName = 'Text'
Text.propTypes = {
  ...space.propTypes,
  ...display.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
}

export default withTheme(Text)
