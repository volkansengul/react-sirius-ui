import React, { PureComponent } from 'react'
import { withTheme } from 'styled-components'
import NumberFormat from 'react-number-format'

import TextInput from './TextInput'

class NumberInput extends PureComponent {
  static propTypes = {
    ...TextInput.propTypes,
    ...NumberFormat.propTypes,
  }

  render() {
    return <NumberFormat customInput={TextInput} {...this.props} />
  }
}
NumberInput.displayName = 'NumberInput'

export default withTheme(NumberInput)
