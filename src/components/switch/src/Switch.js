import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import { space } from 'styled-system'
import { rgba } from 'polished'

const animationEasing = {
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const CheckIcon = ({ size, fill = 'currentColor', ...props }) => (
  <svg height={size} viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
)

const ScSwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  height: 24px;

  ${space}

  ${p =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}
`

const ScSwitchInput = styled.input`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  opacity: 0;

  &:checked + div {
    background-color: ${p => p.theme.colors.success};
    color: white;
  }

  &:not([disabled]):focus + div {
    box-shadow: 0 0 0 3px ${p => rgba(p.theme.colors.smoke, 0.45)};
  }

  &:checked:not([disabled]):focus + div {
    box-shadow: 0 0 0 3px ${p => rgba(p.theme.colors.success, 0.45)};
  }
`

const ScSwitch = styled.div`
  cursor: pointer;
  color: white;
  background-color: ${p => p.theme.colors.smoke};
  border-radius: 9999px;
  transition: all 120ms ease-in-out;
  height: 24px;
  width: 46px;
`

const ScSwitchIconContainer = styled.div`
  height: 24px;
  width: 29px;
  opacity: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  transition: all 500ms ${animationEasing.spring};

  &[data-checked='true'] {
    opacity: 1;
  }

  & svg {
    height: 7px;
  }
`

const ScSwitchHandleContainer = styled.div`
  display: flex;
  transition: transform 200ms ease-in-out;
  transform: translateX(0%);

  &[data-checked='true'] {
    transform: translateX(50%);
  }
`

const ScSwitchHandleWrapper = styled.div`
  flex: 1%;
  padding: 2px;
`

const ScSwitchHandle = styled.div`
  background-color: white;
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`

const isControlled = component => {
  return {}.hasOwnProperty.call(component.props, 'checked')
}

class Switch extends PureComponent {
  static propTypes = {
    /**
     * The id attribute of the checkbox.
     */
    id: PropTypes.string,

    /**
     * The name attribute of the checkbox.
     */
    name: PropTypes.string,

    /**
     * The value attribute of the checkbox.
     */
    value: PropTypes.string,
    /**
     * When true, the switch is checked (on).
     */
    checked: PropTypes.bool,
    /**
     * Function called when state changes.
     */
    onChange: PropTypes.func,

    /**
     * When true, the switch is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * When true, the switch has a check icon.
     */
    hasCheckIcon: PropTypes.bool,

    /**
     * When true, the switch is true by default.
     * This is for uncontrolled usage.
     */
    defaultChecked: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {},
    hasCheckIcon: true,
    disabled: false,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  handleChange = value => {
    if (isControlled(this)) {
      this.props.onChange(value)
    } else {
      this.setState(({ checked }) => ({
        checked: !checked,
      }))
      this.props.onChange(value)
    }
  }

  render() {
    const {
      id,
      name,
      checked: checkedProps,
      onChange,
      disabled,
      hasCheckIcon,
      defaultChecked,
      theme,
      ...props
    } = this.props

    const checked = isControlled(this) ? checkedProps : this.state.checked

    return (
      <ScSwitchContainer>
        <ScSwitchInput
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={this.handleChange}
          theme={props.theme}
        />
        <ScSwitch onClick={this.handleClick} theme={props.theme}>
          <ScSwitchIconContainer data-checked={checked}>
            {hasCheckIcon && <CheckIcon size={9} />}
          </ScSwitchIconContainer>

          <ScSwitchHandleWrapper>
            <ScSwitchHandleContainer data-checked={checked}>
              <ScSwitchHandle />
            </ScSwitchHandleContainer>
          </ScSwitchHandleWrapper>
        </ScSwitch>
      </ScSwitchContainer>
    )
  }
}
Switch.displayName = 'Switch'

export default withTheme(Switch)
