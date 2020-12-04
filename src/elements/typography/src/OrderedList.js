import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScOrderedList = styled.ol`
  margin-left: 1.25rem;
  padding: 0;
  list-style-position: inside;
  list-style: decimal;

  ${space}
`

class OrderedList extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return <ScOrderedList {...props}>{children}</ScOrderedList>
  }
}

export default withTheme(OrderedList)
