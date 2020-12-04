import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space, typography } from 'styled-system'

import Text from './Text'

const ScListItem = styled.li`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.fontSizeBase};

  ${p =>
    p.icon &&
    `
    list-style-type: none;
  `}

  ${space}
  ${typography}
`

class ListItem extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'info',
  }

  render() {
    const { children, icon, ...props } = this.props
    return (
      <ScListItem icon={icon} {...props}>
        {icon && (
          <Text color={props.variant} mr={2} ml={-3}>
            {icon}
          </Text>
        )}
        {children}
      </ScListItem>
    )
  }
}

export default withTheme(ListItem)
