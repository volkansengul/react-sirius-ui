import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { Box } from '../../../elements/box'

const ScPagination = styled.div`
  display: flex;
  align-items: center;
`

const ScPaginationItemCommonStyles = () => {
  return css`
    border-radius: ${p => p.theme.borderRadius};
    color: ${p => p.theme.colors.slate};
    cursor: pointer;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    min-width: 30px;
    margin: 0 0.25rem;
    padding: 0 0.5rem;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    ${p => p.theme.transitionBase(p)};
  `
}

const ScPaginationItemDisabled = () => {
  return css`
    cursor: not-allowed;
    border: 1px solid ${p => p.theme.grays.smoke} !important;
    color: ${p => p.theme.grays.smoke} !important;
  `
}

const ScPaginationPreviousItem = styled.a`
  ${ScPaginationItemCommonStyles()};

  ${p => (p.currentPage === 1 ? ScPaginationItemDisabled() : null)};

  border: 1px solid ${p => p.theme.grays.silver};
  color: ${p => p.theme.grays.dark};

  &:hover {
    border: 1px solid ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.blue};
  }
`

const ScPaginationNextItem = styled.a`
  ${ScPaginationItemCommonStyles()}

  ${p => (p.currentPage === p.pageCount ? ScPaginationItemDisabled() : null)};

  border: 1px solid ${p => p.theme.grays.silver};
  color: ${p => p.theme.grays.dark};

  &:hover {
    border: 1px solid ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.blue};
  }
`

const ScPaginationBackwardItem = styled.a`
  ${ScPaginationItemCommonStyles()};
`

const ScPaginationForwardItem = styled.a`
  ${ScPaginationItemCommonStyles()};
`

const ScPaginationPageItem = styled.a`
  ${ScPaginationItemCommonStyles()}

  border: 1px solid ${p => p.theme.grays.silver};
  color: ${p => p.theme.grays.slate};

  &:hover,
  &:focus{
    color: ${p => p.theme.colors.blue};
    border:1px solid ${p => p.theme.colors.blue};
  }

  ${p =>
    p.active &&
    css`
      background-color: ${p => p.theme.colors.primary};
      border-color: ${p => p.theme.colors.primary};
      color: ${p => p.theme.colors.white};
      font-weight: 500;

      &:hover,
      &:focus {
        color: ${p => p.theme.colors.white};
      }
    `}
`

const pageItem = (page, currentPage, handlePageChange) => {
  return (
    <ScPaginationPageItem
      key={page}
      active={currentPage === page}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </ScPaginationPageItem>
  )
}

class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: this.props.currentPage,
      pageCount: Math.round(this.props.total / this.props.pageSize),
      maxPageCount: 5,
    }
  }

  handlePrevious = () => {
    const previousPage = this.state.currentPage - 1
    if (previousPage > 0) {
      this.setState({ currentPage: previousPage })
    }
    this.props.onChange(previousPage)
  }

  handleNext = () => {
    const nextPage = this.state.currentPage + 1
    if (nextPage <= this.state.pageCount) {
      this.setState({ currentPage: nextPage })
    }
    this.props.onChange(nextPage)
  }

  handlePageChange = page => {
    this.setState({ currentPage: page })
    this.props.onChange(page)
  }

  handleBackward = () => {
    const backwardPage = this.state.currentPage - 5
    if (backwardPage <= 0) {
      this.setState({ currentPage: 1 })
    } else {
      this.setState({ currentPage: backwardPage })
    }
  }

  handleForward = () => {
    const forwardPage = this.state.currentPage + 5
    if (forwardPage >= this.state.pageCount) {
      const { pageCount } = this.state
      this.setState({ currentPage: pageCount })
    } else {
      this.setState({ currentPage: forwardPage })
    }
  }

  render() {
    const pages = []

    if (this.state.pageCount > this.state.maxPageCount) {
      const backward = (
        <ScPaginationBackwardItem
          key="backward-item"
          onClick={this.handleBackward}
        >
          &laquo;
        </ScPaginationBackwardItem>
      )

      const forward = (
        <ScPaginationForwardItem
          key="forward-item"
          onClick={this.handleForward}
        >
          &raquo;
        </ScPaginationForwardItem>
      )

      const first = pageItem(1, this.state.currentPage, this.handlePageChange)

      const last = pageItem(
        this.state.pageCount,
        this.state.currentPage,
        this.handlePageChange,
      )

      if (this.state.currentPage < this.state.maxPageCount + 1) {
        for (let page = 1; page <= this.state.maxPageCount; page += 1) {
          pages.push(
            pageItem(page, this.state.currentPage, this.handlePageChange),
          )
        }

        pages.push(forward)
        pages.push(last)
      } else if (
        this.state.currentPage >
        this.state.pageCount - this.state.maxPageCount
      ) {
        pages.push(first)
        pages.push(backward)
        for (
          let page = this.state.pageCount - this.state.maxPageCount;
          page <= this.state.pageCount;
          page += 1
        ) {
          pages.push(
            pageItem(page, this.state.currentPage, this.handlePageChange),
          )
        }
      } else {
        const range = 2

        pages.push(first)
        pages.push(backward)

        for (
          let page = this.state.currentPage - range;
          page <= this.state.currentPage + range;
          page += 1
        ) {
          pages.push(
            pageItem(page, this.state.currentPage, this.handlePageChange),
          )
        }

        pages.push(forward)
        pages.push(last)
      }
    } else {
      for (let page = 1; page <= this.state.pageCount; page += 1) {
        pages.push(
          pageItem(page, this.state.currentPage, this.handlePageChange),
        )
      }
    }

    return (
      <Box>
        <ScPagination>
          <ScPaginationPreviousItem
            onClick={this.handlePrevious}
            currentPage={this.state.currentPage}
          >
            &lt;
          </ScPaginationPreviousItem>

          {pages}

          <ScPaginationNextItem
            onClick={this.handleNext}
            currentPage={this.state.currentPage}
            pageCount={this.state.pageCount}
          >
            &gt;
          </ScPaginationNextItem>
        </ScPagination>
      </Box>
    )
  }
}

Pagination.displayName = 'Pagination'

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
}

Pagination.defaultProps = {
  currentPage: 1,
  pageSize: 1,
  total: 1,
}

export default withTheme(Pagination)
