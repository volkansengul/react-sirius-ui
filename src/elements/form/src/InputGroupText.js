import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'

const sizeStyles = {
  sm: p => css`
    padding: 0 ${p.theme.inputPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    line-height: ${p.theme.inputLineHeightSm};
  `,
  md: p => css`
    padding: 0 ${p.theme.inputPaddingX};
    font-size: ${p.theme.fontSizeBase};
    line-height: ${p.theme.inputLineHeight};
  `,
  lg: p => css`
    padding: 0 ${p.theme.inputPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    line-height: ${p.theme.inputLineHeightLg};
  `,
}

const ScInputGroupText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  background-color: ${p => p.theme.colors.smoke};
  border: 1px solid ${p => p.theme.colors.smoke};
  border-radius: ${p => p.theme.borderRadius};

  ${p => sizeStyles[p.size](p)};

  ${p =>
    p.type === 'append' &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  ${p =>
    p.type === 'prepend' &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`

class InputGroupText extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    type: PropTypes.oneOf(['append', 'prepend']),
  }

  static defaultProps = {
    size: 'md',
    type: 'prepend',
  }

  render() {
    const { children, ...props } = this.props

    return <ScInputGroupText {...props}>{children}</ScInputGroupText>
  }
}

export default withTheme(InputGroupText)
