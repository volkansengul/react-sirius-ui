import React, { PureComponent } from 'react'
import styled, { withTheme, css } from 'styled-components'

const ScTh = styled.th`
  text-align: left;
  vertical-align: top;

  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 400;
  color: ${p => p.theme.colors.slate};
  border-bottom: 1px solid #c4cdd5;
  border-top: 0;

  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: unset;
  backface-visibility: hidden;
  padding: 1.6rem;
  transition: background-color 0.2s ease-in-out;

  ${p =>
    p.fixed &&
    css`
      position: absolute;
      border-bottom: 1px solid #c4cdd5;
      z-index: 100;
      top: auto;
      left: 0;
      width: 200px;
      backface-visibility: hidden;
    `}

  ${p =>
    p.total &&
    css`
      font-weight: 600;
      background: #f9fafb;
      border-bottom: 0.1rem solid #dfe3e8;
    `}
`

const ScTd = styled.td`
  font-size: ${p => p.theme.fontSizeBase};
  text-align: left;
  color: #212b36;

  padding: 1.6rem;
  border-bottom: 1px solid #f4f6f8;
  white-space: nowrap;
  text-align: left;
  transition: background-color 0.2s ease-in-out;
  vertical-align: top;

  ${p =>
    p.fixed &&
    css`
      position: absolute;
      border-bottom: 1px solid #f4f6f8;
      top: auto;
      left: 0;
      width: 200px;
      white-space: unset;
      text-align: left;
      backface-visibility: hidden;
      background: #fff;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;
    `}
`

class DataTableCell extends PureComponent {
  render() {
    const { content, header, fixed, height, total } = this.props
    const style = height ? { height: `${height}px` } : undefined

    const cellMarkup = header ? (
      <ScTh fixed={fixed} total={total} style={style}>
        {content}
      </ScTh>
    ) : (
      <ScTd fixed={fixed} style={style}>
        {content}
      </ScTd>
    )
    return cellMarkup
  }
}

export default withTheme(DataTableCell)
