import styled, { withTheme } from 'styled-components'

const DescriptionTerm = styled.dt`
  flex: 0 1 25%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 600;
`

export default withTheme(DescriptionTerm)
