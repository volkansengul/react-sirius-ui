import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

const ScSvg = styled.svg`
  position: relative;
  top: -0.1rem;
  vertical-align: middle;
`

const IconCross = () => (
  <ScSvg viewBox="0 0 20 20" width="1em" height="1em">
    <path
      fill="currentColor"
      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
    />
  </ScSvg>
)

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const rotate360InAnimation = keyframes`
  from: {
    transform: translateX(100%) rotate(0deg)
  },
  to: {
    transform: translateX(-100%) rotate(-360deg)
  }
`

const rotate360OutAnimation = keyframes`
  from: {
    transform: translateX(-100%) rotate(0deg)
  },
  to: {
    transform: translateX(100%) rotate(360deg)
  }
`

const ScSideSheetClose = styled.div`
  cursor: pointer;
  transform: translateX(-100%);
  background-color: rgba(255, 255, 255, 0.4);
  transition: background-color 120ms;
  position: absolute;
  margin-left: -1rem;
  margin-top: 0.75rem;
  border-radius: 3rem;
  padding-top: 0.25rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${rotate360InAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting'] {
    animation: ${rotate360OutAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`

class SideSheetClose extends PureComponent {
  static propTypes = {
    isClosing: PropTypes.bool,
  }

  render() {
    const { isClosing, ...props } = this.props

    return (
      <ScSideSheetClose {...props}>
        <IconCross />
      </ScSideSheetClose>
    )
  }
}

export default withTheme(SideSheetClose)
