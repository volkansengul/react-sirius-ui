import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScCardFooter = styled.div`
  background-color: rgb(228, 231, 235);
  border-bottom-left-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
`

class CardFooter extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return <ScCardFooter>{this.props.children}</ScCardFooter>
  }
}

export default withTheme(CardFooter)
