import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

import { DataTableCell } from '..'

const ScTable = styled.table`
  /* border: 1px solid ${p => p.theme.grays.smoke}; */
  border-collapse: collapse;
  background-color: ${p => p.theme.grays.white};
  line-height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;


  ${space}
`

const ScTableContainer = styled.div`
  position: relative;
  max-width: 100vw;
`

const ScTableScrollContainer = styled.div`
  margin-left: 200px;
  overflow-x: auto;
`

class DataTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cellHeights: [],
    }

    this.tableRef = React.createRef()
  }

  componentDidMount() {
    this.handleCellHeightResize()
  }

  static propTypes = {
    /**
     * List of table columns
     */
    columns: PropTypes.array,
    /**
     * Data source of the table.
     */
    rows: PropTypes.array,
  }

  renderHeadingRow = (_cell, cellIndex) => {
    const { columns } = this.props
    const { cellHeights } = this.state

    return (
      <DataTableCell
        key={`column-${cellIndex}`}
        content={columns[cellIndex]}
        header
        fixed={cellIndex === 0}
        height={cellHeights[0]}
      />
    )
  }

  renderTotals = (_cell, cellIndex) => {
    const { totals } = this.props
    const { cellHeights } = this.state

    return (
      <DataTableCell
        key={`total-${cellIndex}`}
        content={totals[cellIndex]}
        header
        fixed={cellIndex === 0}
        height={cellHeights[1]}
        total
      />
    )
  }

  renderRow = (_row, rowIndex) => {
    const { rows } = this.props
    const { cellHeights } = this.state
    const heightIndex = rowIndex + 1

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <DataTableCell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
              fixed={cellIndex === 0}
              height={cellHeights[heightIndex]}
            />
          )
        })}
      </tr>
    )
  }

  setTable = table => {
    this.table = table
  }

  getTallestCellHeights = () => {
    const rows = Array.from(this.tableRef.current.getElementsByTagName('tr'))
    let { heights } = this.state

    heights = rows.map(row => {
      const fixedCell = row.childNodes[0]
      return Math.max(row.clientHeight, fixedCell.clientHeight)
    })

    return heights
  }

  // Write a function to set cellHeights as the array of the tallest heights
  handleCellHeightResize = () => {
    this.setState({ cellHeights: this.getTallestCellHeights() })
  }

  render() {
    const { columns, totals, rows, ...props } = this.props

    this.renderHeadingRow = this.renderHeadingRow.bind(this)
    this.renderTotals = this.renderTotals.bind(this)
    this.renderRow = this.renderRow.bind(this)

    const theadMarkup = (
      <tr key="columns">{columns.map(this.renderHeadingRow)}</tr>
    )

    const totalsMarkup = <tr key="totals">{totals.map(this.renderTotals)}</tr>

    const tbodyMarkup = rows.map(this.renderRow)

    return (
      <ScTableContainer ref={this.tableRef}>
        <ScTableScrollContainer>
          <ScTable {...props}>
            <thead>
              {theadMarkup}
              {totalsMarkup}
            </thead>
            <tbody>{tbodyMarkup}</tbody>
          </ScTable>
        </ScTableScrollContainer>
      </ScTableContainer>
    )
  }
}
DataTable.displayName = 'DataTable'

export default withTheme(DataTable)
