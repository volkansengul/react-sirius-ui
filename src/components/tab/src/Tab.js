import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScTab = styled.div``

class Tab extends PureComponent {
  static propTypes = {
    label: PropTypes.node,
  }

  render() {
    const { label, ...props } = this.props

    return <ScTab>{props.children}</ScTab>
  }
}
Tab.displayName = 'Tab'

export default withTheme(Tab)
