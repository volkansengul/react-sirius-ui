import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScTimelineItem = styled.li`
  position: relative;
  padding: 0 0 1.25rem 0;
  list-style: none;
  font-size: ${p => p.theme.fontSizeBase};

  ${space}
`

const ScTimelineItemHead = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: white;
  border: 3px solid transparent;
  border-radius: 100px;
  z-index: 3;

  color: ${p => p.theme.colors[p.variant]};
  border-color: ${p => p.theme.colors[p.variant]};
`

const ScTimelineItemTail = styled.div`
  position: absolute;
  top: 0.75em;
  left: 5px;
  height: 100%;
  border-left: 2px solid ${p => p.theme.colors.smoke};
  z-index: 2;

  ${ScTimelineItem}:last-child & {
    display: none;
  }
`

const ScTimelineContent = styled.div`
  position: relative;
  margin: 0 0 0 2.5rem;
  top: -0.25rem;
`

const ScTimelineIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: -11px;
  z-index: 3;

  background-color: ${p => p.theme.colors[p.variant]};
  color: ${p => p.theme.colors.white};

  & svg {
    top: 1px;
  }
`

class TimelineItem extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ]),
  }

  static defaultProps = {
    variant: 'primary',
  }

  render() {
    const { children, icon, ...props } = this.props
    return (
      <ScTimelineItem {...props}>
        {!icon && (
          <>
            <ScTimelineItemHead variant={props.variant} />
            <ScTimelineItemTail />
          </>
        )}

        {icon && (
          <>
            <ScTimelineIcon variant={props.variant}>{icon}</ScTimelineIcon>
            <ScTimelineItemTail />
          </>
        )}

        <ScTimelineContent>{children}</ScTimelineContent>
      </ScTimelineItem>
    )
  }
}
TimelineItem.displayName = 'TimelineItem'

export default withTheme(TimelineItem)
