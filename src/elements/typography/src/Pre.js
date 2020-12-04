import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const Pre = styled.pre`
  background-color: ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};
  display: block;
  font-size: 87.5%;
  color: ${p => p.theme.colors.shaft};
  overflow: auto;
  padding: 1rem;

  ${space}
`

export default withTheme(Pre)
