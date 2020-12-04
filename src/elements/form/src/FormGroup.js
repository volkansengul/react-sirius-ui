import React, { PureComponent } from 'react'
import styled, { withTheme } from 'styled-components'
import { space, typography, flex } from 'styled-system'

import { Box } from '../../box'

const ScFormGroup = styled(Box)`
  margin-bottom: 1rem;
  text-align: left;

  ${space}
  ${typography}
  ${flex}
`

class FormGroup extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return <ScFormGroup {...props}>{children}</ScFormGroup>
  }
}

export default withTheme(FormGroup)
