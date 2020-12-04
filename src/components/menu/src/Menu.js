import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const ScMenu = styled.nav`
  padding: 0.5rem;
  width: 100%;
`

class Menu extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
  }

  static defaultValues = {
    size: 'md',
  }

  render() {
    const { children, size, ...props } = this.props

    const items = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        size: child.props.size || size,
        ...props,
      })
    })

    return <ScMenu>{items}</ScMenu>
  }
}

export default withTheme(Menu)
