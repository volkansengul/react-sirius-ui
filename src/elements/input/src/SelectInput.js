import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { space } from 'styled-system'
import { controlFocus, transitionBase } from '../../../theming'

const sizeStyles = {
  sm: p => css`
    padding: ${p.theme.inputPaddingYSm} ${p.theme.inputPaddingXSm};
    font-size: ${p.theme.fontSizeSm};
    line-height: ${p.theme.inputLineHeightSm};
    border-radius: ${p.theme.borderRadiusSm};
    height: calc(
      ${p.theme.inputLineHeightSm}em + ${p.theme.inputTotalPaddingYSm} + 2px
    );
  `,
  md: p => css`
    padding: ${p.theme.inputPaddingY} ${p.theme.inputPaddingX};
    font-size: ${p.theme.fontSizeBase};
    line-height: ${p.theme.inputLineHeight};
    border-radius: ${p.theme.borderRadius};
    height: calc(
      ${p.theme.inputLineHeight}em + ${p.theme.inputTotalPaddingY} + 2px
    );
  `,
  lg: p => css`
    padding: ${p.theme.inputPaddingYLg} ${p.theme.inputPaddingXLg};
    font-size: ${p.theme.fontSizeLg};
    line-height: ${p.theme.inputLineHeightLg};
    border-radius: ${p.theme.borderRadiusLg};
    height: calc(
      ${p.theme.inputLineHeightLg}em + ${p.theme.inputTotalPaddingYLg} + 2px
    );
  `,
}

const ScSelect = styled.select`
  color: ${p => p.theme.inputTextColor};
  font-family: ${p => p.theme.fontFamily};
  display: block;
  width: 100%;
  word-wrap: normal;

  line-height: ${p => p.theme.inputLineHeight};
  background-color: white;
  background-clip: padding-box;
  border: ${p => p.theme.inputBorderWidth} solid
    ${p => p.theme.inputBorderColor};

  ${p =>
    p.inline &&
    css`
      display: inline-block;
      width: auto;
    `}

  &[type='number'] {
    padding-right: 6px;
  }

  &::placeholder {
    color: ${p => p.theme.inputPlaceholderText};
    /* Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */
    opacity: 1;
  }

  &:focus {
    ${p => controlFocus(p.theme.colors.primary)(p)}
  }

  &:disabled {
    background-color: ${p => p.theme.inputDisabledBgColor};
    color: ${p => p.theme.inputDisabledText};
  }

  ${p => transitionBase(p)};
  ${p => sizeStyles[p.size](p)};

  ${space}
`

function createStyledComponent(size, inline, props) {
  return <ScSelect size={size} inline={inline} {...props} />
}

class SelectInput extends PureComponent {
  static propTypes = {
    /**
     * Size of input. Same as button. Default is 'md'
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Pass this prop if the input is display: inline-block and width: auto.
     */
    inline: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    size: 'md',
    inline: false,
  }

  render() {
    const { size, inline, ...inputProps } = this.props

    return createStyledComponent(size, inline, ...inputProps)
  }
}
SelectInput.displayName = 'SelectInput'

export default withTheme(SelectInput)
