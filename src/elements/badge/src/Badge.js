import React, { PureComponent } from 'react'
import styled, { css, withTheme, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { rgba } from 'polished'

import { Text } from '../../typography'

const getPulseAnimation = (variant, p) => {
  return keyframes`
    0% {
      box-shadow: 0 0 0 0 ${rgba(p.theme.colors[variant], 0.4)};
    }
    20% {
      box-shadow: 0 0 0 0.5rem ${rgba(p.theme.colors[variant], 0)};
    }
    30% {
      box-shadow: 0 0 0 0 ${rgba(p.theme.colors[variant], 0)};
    }
    100% {
      box-shadow: 0 0 0 0 ${rgba(p.theme.colors[variant], 0)};
    }
  `
}

const getVariantStyle = (variant, p) => {
  return css`
    background-color: ${p.theme.colors[variant]};
    color: ${p.theme.colorYik(p.theme.colors[variant])};
  `
}

const ScBadgeContainer = styled.div`
  display: inline-block;
  position: relative;

  ${space}
`

function createStyledComponent(
  variant,
  children,
  count,
  isDot,
  text,
  interval,
  props,
) {
  const variantStyle = getVariantStyle(variant, props)
  const pulseAnimation = getPulseAnimation(variant, props)

  const ScBadge = styled.span`
    display: inline-block;
    z-index: 10;
    height: 20px;
    padding: 0 0.35rem;
    min-width: 20px;
    line-height: 20px;
    font-size: ${p => p.theme.fontSizeSm};
    white-space: nowrap;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 0 1px ${p => p.theme.colors.white};
    font-weight: 600;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
    vertical-align: baseline;

    ${isDot &&
      css`
        width: 12px;
        height: 12px;
        border-radius: 100%;
        min-width: unset;
        position: relative;
        vertical-align: middle;
        transform: none;
        right: unset;
        box-shadow: 0 0 0 0 ${p => rgba(p.theme.colors[variant], 0.4)};
        animation: ${pulseAnimation} ${interval}ms infinite;
      `}

    ${children &&
      css`
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
      `}

    ${variantStyle};
    ${space}
  `

  return (
    <ScBadgeContainer {...props}>
      {children && (
        <>
          {!isDot && (
            <>
              {children}

              {count > 0 && (
                <ScBadge theme={props.theme} isDot={isDot}>
                  {count < 100 ? count : '99+'}
                </ScBadge>
              )}
            </>
          )}

          {isDot && (
            <>
              {children}
              <ScBadge theme={props.theme} isDot />
            </>
          )}
        </>
      )}

      {!children && (
        <>
          {!isDot && count > 0 && (
            <ScBadge theme={props.theme}>{count < 100 ? count : '99+'}</ScBadge>
          )}

          {isDot && (
            <>
              <ScBadge theme={props.theme} />
              {text && (
                <Text ml={2} color="slate">
                  {text}
                </Text>
              )}
            </>
          )}
        </>
      )}
    </ScBadgeContainer>
  )
}

class Badge extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    count: PropTypes.number,
    isDot: PropTypes.bool,
    text: PropTypes.string,
    /**
     * Animation interval in miliseconds.
     */
    interval: PropTypes.number,
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
    ...space.propTypes,
  }

  static defaultProps = {
    count: 0,
    interval: 6000,
    variant: 'danger',
    isDot: false,
  }

  render() {
    return createStyledComponent(
      this.props.variant,
      this.props.children,
      this.props.count,
      this.props.isDot,
      this.props.text,
      this.props.interval,
      ...this.props,
    )
  }
}
Badge.displayName = 'Badge'

export default withTheme(Badge)
