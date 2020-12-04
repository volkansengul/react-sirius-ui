import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;
  background-color: ${p => p.theme.grays.white};
  line-height: 100%;
  text-align: left;
  width: 100%;

  & thead {
    border: inherit;
  }

  & thead > tr {
    background-color: #fafafa;
  }

  & thead > tr > th {
    color: rgba(0, 0, 0, 0.85);
    font-size: ${p => p.theme.fontSizeBase};
    font-weight: 500;
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    transition: background 0.3s ease;
    padding: 1rem;
  }

  & tbody {
  }

  & tbody tr {
    transition: all 0.3s, height 0s;
  }

  & tbody tr:hover > td {
    background-color: ${p => p.theme.tints.primary};
  }
`

export default Table
