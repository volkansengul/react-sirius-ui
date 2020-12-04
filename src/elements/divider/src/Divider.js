import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space } from 'styled-system'

const ScDividerLine = styled.div`
  background-color: ${p => p.theme.colors.smoke};
  box-sizing: border-box;
  position: relative;
  padding: 0;
  vertical-align: middle;

  ${space};

  ${p =>
    p.direction === 'horizontal' &&
    css`
      display: block;
      clear: both;
      width: 100%;
      min-width: 100%;
      height: 1px;
      margin: 1.5rem 0;
      top: -0.06em;
    `}

  ${p =>
    p.direction === 'vertical' &&
    css`
      position: relative;
      display: inline-block;
      width: 1px;
      height: 0.9em;
      margin: 0 0.5rem;
      vertical-align: middle;
      top: -0.06em;
    `}
`

const ScDividerWithText = styled.div`
  background-color: transparent;
  clear: both;
  height: 1px;
  margin: 1.5rem 0;
  display: table;
  position: relative;
  vertical-align: middle;
  min-width: 100%;
  width: 100%;
  top: -0.06em;
  white-space: nowrap;

  ${space};

  &:before {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid ${p => p.theme.colors.smoke};
    transform: translateY(50%);
    content: '';
  }

  &:after {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid ${p => p.theme.colors.smoke};
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    content: '';
  }

  ${p =>
    p.orientation === 'left' &&
    css`
      &:before {
        width: 5%;
      }

      &:after {
        width: 95%;
      }
    `}

  ${p =>
    p.orientation === 'right' &&
    css`
      &:before {
        width: 95%;
      }

      &:after {
        width: 5%;
      }
    `}
`

const ScDividerContent = styled.div`
  display: inline-block;
  padding: 0 1.5rem;
  font-size: ${p => p.theme.fontSizeBase};
`

class Divider extends PureComponent {
  static propTypes = {
    /**
     * Sets the direction of divider. Can be horiztonal or vertical.
     */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * Sets the position of divider text. Can be left or right.
     */
    orientation: PropTypes.oneOf(['left', 'right']),
    /**
     * You can add text or content in the center of a divider.
     */
    text: PropTypes.node,
    ...space.propTypes,
  }

  static defaultProps = {
    direction: 'horizontal',
  }

  render() {
    const { children, ...props } = this.props
    return (
      <>
        {!children && <ScDividerLine {...props} />}
        {children && (
          <ScDividerWithText {...props}>
            <ScDividerContent theme={props.theme}>{children}</ScDividerContent>
          </ScDividerWithText>
        )}
      </>
    )
  }
}

export default withTheme(Divider)
