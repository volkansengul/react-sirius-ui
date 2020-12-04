import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const DescriptionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  ${space}
`

export default withTheme(DescriptionList)
