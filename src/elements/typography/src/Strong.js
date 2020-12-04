import styled, { withTheme } from 'styled-components'
import { space, color } from 'styled-system'

const Strong = styled.strong`
  font-weight: 600;

  ${color}
  ${space}
`
export default withTheme(Strong)
