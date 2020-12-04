import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScFormHint = styled.div`
  color: ${p => p.theme.grays.silver};
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
  font-size: ${p => p.theme.fontSizeBase};

  ${space}
`

class FormHint extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return <ScFormHint {...props}>{children}</ScFormHint>
  }
}

export default withTheme(FormHint)
