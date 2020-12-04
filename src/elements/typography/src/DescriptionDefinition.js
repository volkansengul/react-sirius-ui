import styled, { withTheme } from 'styled-components'

const DescriptionDefinition = styled.dt`
  flex: 1 1 51%;
  padding: 0 0 0.5rem 0;
  font-size: ${p => p.theme.fontSizeBase};
  margin-left: 0;
`

export default withTheme(DescriptionDefinition)
