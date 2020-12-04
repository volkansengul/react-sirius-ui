import styled, { css } from 'styled-components'
import { color, textAlign } from 'styled-system'

const TableCell = styled.td`
  border-bottom: 1px solid #e8e8e8;
  font-size: ${p => p.theme.fontSizeBase};
  transition: all 0.3s, border 0s;
  padding: 1rem;
  vertical-align: middle;

  ${p =>
    p.isNumber &&
    css`
      font-family: ${p => p.theme.fontFamilyMonospace};
      font-weight: 500;
    `}

  ${color}
  ${textAlign}
`

export default TableCell
