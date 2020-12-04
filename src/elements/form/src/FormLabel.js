import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScFormLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: ${p => p.theme.fontSizeBase};
  font-weight: 500;

  ${space}
`

class FormLabel extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return <ScFormLabel {...props}>{children}</ScFormLabel>
  }
}

export default withTheme(FormLabel)
