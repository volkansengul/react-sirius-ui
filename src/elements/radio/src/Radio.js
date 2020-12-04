import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { rgba } from 'polished'
import { space } from 'styled-system'

import { buttonFocus } from '../../../theming/control'
import { Text } from '../../typography'

const CircleIcon = ({ size, fill = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" {...props}>
    <circle fill={fill} cx="5" cy="5" r="5" />
  </svg>
)

const ScRadioContainer = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${space}

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}
`

const ScRadioInput = styled.input`
  border: 0px;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  opacity: 0;

  & + div > svg {
    display: none;
  }

  & + div {
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.smoke};
    box-shadow: inset 0 0 0 1px ${p => rgba(p.theme.colors.shaft, 0.1)},
      inset 0 -1px 1px 0 ${p => rgba(p.theme.colors.shaft, 0.05)};

    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:focus + div {
    ${p => buttonFocus(p.theme.colors.smoke)(p)};
  }

  &:checked:focus + div {
    ${p => buttonFocus(p.theme.colors.primary)(p)};
  }

  &:checked + div,
  &:checked:indeterminate + div {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }

  &:checked + div > svg,
  &:checked:indeterminate + div > svg {
    display: block;
  }

  &:disabled + div {
    cursor: not-allowed;
    box-shadow: inset 0 0 0 1px ${p => rgba(p.theme.colors.shaft, 0.14)};
    background-color: ${p => p.theme.colors.snow};
    background-image: none;
    color: ${p => p.theme.colors.silver};
  }
`

const ScRadio = styled.div`
  box-sizing: border-box;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: background-color 0.15s, box-shadow 0.15s;
`

class Radio extends Component {
  static propTypes = {
    /**
     * The id attribute of the radio.
     */
    id: PropTypes.string,

    /**
     * The name attribute of the radio.
     */
    name: PropTypes.string,

    /**
     * Label of the radio.
     */
    label: PropTypes.node,

    /**
     * The value attribute of the radio.
     */
    value: PropTypes.string,

    /**
     * Function called when state changes
     * Signature:
     * ```
     * function(event: object, checked: boolean) => void
     * ```
     */
    onChange: PropTypes.func,

    /**
     * When true, the radio is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * When true, the radio is checked.
     */
    checked: PropTypes.bool,
    /**
     * When true, the radio get the required attribute.
     */
    isRequired: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    onChange: () => {},
    // isRequired: false,
    // isInvalid: false
  }

  handleChange = event => {
    this.props.onChange(event, event.target.checked)
  }

  render() {
    const {
      id,
      name,
      label,
      checked,
      disabled,
      onChange,
      value,
      isRequired,
      ...props
    } = this.props

    return (
      <ScRadioContainer disabled={disabled} {...props}>
        <ScRadioInput
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
          required={isRequired}
          theme={props.theme}
        />
        <ScRadio theme={props.theme}>
          <CircleIcon size={6} />
        </ScRadio>
        {label && (
          <Text ml={2} color={disabled ? 'silver' : 'dark'}>
            {label}
          </Text>
        )}
      </ScRadioContainer>
    )
  }
}

export default withTheme(Radio)
