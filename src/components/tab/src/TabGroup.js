import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { darken } from 'polished'
import { space } from 'styled-system'

const ScTabGroup = styled.div`
  ${space}
`

const ScTabNav = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ScTabNavItem = styled.span`
  background-color: ${p => p.theme.colors.snow};
  border-radius: 0.2rem;
  cursor: pointer;
  display: inline-flex;
  font-size: ${p => p.theme.fontSizeBase};
  padding: 0.375rem 0.75rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-right: 0.5rem;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: ${p => darken(0.1, p.theme.colors.snow)};
  }

  &:last-child {
    margin-right: none;
  }

  ${p =>
    p.isSelected &&
    css`
      background-color: ${p => p.theme.tints.primary};
      color: ${p => p.theme.colors.primary};
      font-weight: 500;

      &:hover {
        background-color: ${p => p.theme.tints.primary};
        color: ${p => p.theme.colors.primary};
      }
    `}
`

const ScTabBody = styled.div`
  padding: 1rem 0 0;
`

class TabGroup extends PureComponent {
  static propTypes = {
    selectedTabIndex: PropTypes.number,
    children: PropTypes.node,
    ...space.propTypes,
  }

  constructor(props) {
    super(props)

    const { selectedTabIndex } = this.props
    this.handleChangeTab = this.handleChangeTab.bind(this)
    this.state = {
      selectedTabIndex: selectedTabIndex || 0,
    }
  }

  handleChangeTab = (event, tabIndex) => {
    this.setState({
      selectedTabIndex: tabIndex,
    })
  }

  render() {
    const tabs = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { ...child.props })
    })

    const navItems = tabs.map((tab, index) => {
      return (
        <ScTabNavItem
          key={index}
          onClick={event => this.handleChangeTab(event, index)}
          isSelected={this.state.selectedTabIndex === index}
        >
          {tab.props.label}
        </ScTabNavItem>
      )
    })

    const currentTab = tabs.map((tab, index) =>
      index === this.state.selectedTabIndex ? tab : null,
    )

    return (
      <ScTabGroup role="tablist">
        <ScTabNav>{navItems}</ScTabNav>
        <ScTabBody>{currentTab}</ScTabBody>
      </ScTabGroup>
    )
  }
}
TabGroup.displayName = 'TabGroup'

export default withTheme(TabGroup)
