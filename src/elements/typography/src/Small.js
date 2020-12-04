import styled, { withTheme } from 'styled-components'
import { space, color } from 'styled-system'

const Small = styled.small`
  font-size: 80%;
  font-weight: 400;

  ${color}
  ${space}
`
export default withTheme(Small)
