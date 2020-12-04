import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

import { Box } from '../../box'
import Radio from './Radio'

let radioCount = 1 // Used for generating unique input names

class RadioGroup extends PureComponent {
  static propTypes = {
    /**
     * The options for the radios of the Radio Group.
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
      }),
    ),
    /**
     * The selected item value when controlled.
     */
    value: PropTypes.string,

    /**
     * The default value of the Radio Group when uncontrolled.
     */
    defaultValue: PropTypes.string,

    /**
     * Function called when state changes.
     */
    onChange: PropTypes.func,

    /**
     * When true, the radio get the required attribute.
     */
    isRequired: PropTypes.bool,
    ...space.propTypes,
  }

  static defaultProps = {
    options: [],
    onChange: () => {},
    isRequired: false,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      value: props.defaultValue || props.options[0].value,
    }

    this.name = `RadioGroup-${radioCount}`
    radioCount += 1
  }

  handleChange = event => {
    const { value } = event.target

    // Save a render cycle when it's a controlled input
    if (!this.props.value) {
      this.setState({ value })
    }

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    const {
      defaultValue,
      value,
      options,
      onChange,
      isRequired,
      ...props
    } = this.props

    // Allows it to behave like a controlled input
    const selected = value || this.state.value

    return (
      <Box {...props}>
        {options.map(item => (
          <Radio
            key={item.value}
            name={this.name}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            disabled={item.isDisabled}
            onChange={this.handleChange}
            isRequired={isRequired}
          />
        ))}
      </Box>
    )
  }
}

export default RadioGroup
