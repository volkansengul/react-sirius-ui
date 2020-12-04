import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { space } from 'styled-system'

const ScProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${space}
`

const ScProgress = styled.div`
  background-color: ${p => p.theme.grays.smoke};
  border-radius: 5rem;
  flex: 1;
`

const ScLine = styled.span`
  border-radius: 5rem;
  display: block;
  height: 8px;
  text-align: center;
  width: ${p => p.percentage}%;
  background-color: ${p => p.theme.colors[p.variant]};
`

const ScPercentageText = styled.span`
  color: ${p => p.theme.colors.slate};
  font-size: ${p => p.theme.fontSizeBase};
  margin-left: 1rem;
`

class Progress extends PureComponent {
  static propTypes = {
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
    percentage: PropTypes.number,
    isStriped: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    variant: 'primary',
    percentage: 0,
  }

  render() {
    const { percentage, variant, ...props } = this.props

    return (
      <ScProgressContainer {...props}>
        <ScProgress title={`%${percentage}`}>
          <ScLine percentage={percentage} variant={variant} />
        </ScProgress>

        <ScPercentageText>%{percentage}</ScPercentageText>
      </ScProgressContainer>
    )
  }
}
Progress.displayName = 'Progress'

export default withTheme(Progress)
