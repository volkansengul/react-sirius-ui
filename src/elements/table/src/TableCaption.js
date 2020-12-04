import styled from 'styled-components'
import { space } from 'styled-system'

const TableCaption = styled.caption`
  color: ${p => p.theme.grays.slate};
  margin-bottom: 0.5rem;
  font-size: ${p => p.theme.fontSizeSm};
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;

  ${space}
`

export default TableCaption
