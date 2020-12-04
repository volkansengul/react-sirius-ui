import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space } from 'styled-system'
import { rgba } from 'polished'

import { buttonFocus } from '../../../theming/control'
import { Text } from '../../typography'

const CheckIcon = ({ fill = 'currentColor', ...props }) => (
  <svg width={10} height={7} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

const ScCheckboxContainer = styled.label`
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

const ScCheckboxInput = styled.input`
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

const ScCheckbox = styled.div`
  box-sizing: border-box;
  border-radius: ${p => p.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: background-color 0.15s, box-shadow 0.15s;
`

class Checkbox extends PureComponent {
  static propTypes = {
    /**
     * Compose some styled-sytem apis.
     */
    ...space.propTypes,
    /**
     * The id attribute of the checkbox.
     */
    id: PropTypes.string,
    /**
     * The id attribute of the radio.
     */
    name: PropTypes.string,

    /**
     * Label of the checkbox.
     */
    label: PropTypes.node,

    /**
     * The value attribute of the radio.
     */
    value: PropTypes.string,
    /**
     * The checked attribute of the radio.
     */
    checked: PropTypes.bool,

    /**
     * Function called when state changes.
     */
    onChange: PropTypes.func,

    /**
     * When true, the radio is disabled.
     */
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {},
  }

  render() {
    const {
      id,
      name,
      label,
      disabled,
      checked,
      onChange,
      value,
      ...props
    } = this.props

    return (
      <ScCheckboxContainer disabled={disabled} {...props}>
        <ScCheckboxInput
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          theme={props.theme}
        />
        <ScCheckbox theme={props.theme}>
          <CheckIcon />
        </ScCheckbox>
        {label && (
          <Text ml={2} color={disabled ? 'silver' : 'dark'}>
            {label}
          </Text>
        )}
      </ScCheckboxContainer>
    )
  }
}

export default withTheme(Checkbox)
