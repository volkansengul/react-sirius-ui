import styled from 'styled-components'
import { color, textAlign } from 'styled-system'

const TableHeaderCell = styled.th`
  background-color: ${p => p.theme.grays.snow};
  border: inherit;
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: ${p => p.theme.tableHeaderCellFontWeight};
  padding: ${p => p.theme.tableCellPadding};
  text-align: left;
  vertical-align: middle;

  ${color};
  ${textAlign}
`
export default TableHeaderCell
