import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScUnorderedList = styled.ul`
  margin-left: 1.25rem;
  padding: 0;
  list-style-position: inside;
  list-style: disc;

  ${space}
`

class UnorderedList extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    ...space.propTypes,
  }

  render() {
    const { children, icon, ...props } = this.props
    const finalChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        variant: child.props.variant || this.props.variant,
        icon: child.props.icon || this.props.icon,
      })
    })

    return <ScUnorderedList {...props}>{finalChildren}</ScUnorderedList>
  }
}

export default withTheme(UnorderedList)
