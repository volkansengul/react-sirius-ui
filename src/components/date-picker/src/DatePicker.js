import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Datetime from 'react-datetime'
import { TextInput } from '../../..'

const ScDatetime = styled(Datetime)`
  display: block;
  position: relative;

  &.rdtOpen .rdtPicker {
    display: block;
  }
  &.rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }

  .rdtPicker {
    display: none;
    position: absolute;
    width: 250px;
    padding: 0.25rem;
    z-index: 99999 !important;
    background: ${p => p.theme.colors.white};
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.3),
      0 2px 4px -2px rgba(67, 90, 111, 0.47);
    border: 1px solid ${p => p.theme.colors.smoke};
    border-radius: ${p => p.theme.borderRadius};

    ${p =>
      p.position === 'bottom' &&
      `
      margin-top: 0.5rem;
    `}

    ${p =>
      p.position === 'top' &&
      `
      margin-bottom: 0.5rem;
      margin-top: 0;
      bottom: 100%;
    `}
  }

  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }

  .rdtPicker table {
    width: 100%;
    margin: 0;
  }

  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
  }

  .rdtPicker td {
    cursor: pointer;
    border-radius: ${p => p.theme.borderRadius};
  }

  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background: #eeeeee;
    cursor: pointer;
  }

  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }

  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 8px solid transparent;
    border-bottom: 8px solid ${p => p.theme.colors.primary};
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 3px;
    right: 3px;
  }

  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: #eeeeee;
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }

  .rdtCounters {
    display: inline-block;
  }

  .rdtCounters > div {
    float: left;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 40px;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`

class DatePicker extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    transparent: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom']),
  }

  static defaultProps = {
    size: 'md',
    transparent: false,
    width: 'auto',
    position: 'bottom',
  }

  renderInput = props => {
    const { size, transparent, width, placeholder, ...otherProps } = this.props

    return (
      <TextInput
        size={size}
        transparent={transparent}
        placeholder={placeholder}
        {...props}
        {...otherProps}
      />
    )
  }

  render() {
    const { theme, ...props } = this.props
    return (
      <ScDatetime
        closeOnSelect
        renderInput={this.renderInput}
        theme={theme}
        {...props}
      />
    )
  }
}

export default withTheme(DatePicker)
