import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScTimeline = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${space}
`

class Timeline extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return <ScTimeline {...props}>{children}</ScTimeline>
  }
}
Timeline.displayName = 'Timeline'

export default withTheme(Timeline)
