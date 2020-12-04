import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Alert } from '../../alert'

const ANIMATION_DURATION = 240
const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
}

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    transform: translateY(0);
  }
`

const closeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`

const ScToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transition: all ${ANIMATION_DURATION}ms ${animationEasing.deceleration};

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.spring} both;
  }

  &[data-state='exiting'] {
    animation: ${closeAnimation} ${ANIMATION_DURATION / 2}ms
      ${animationEasing.acceleration} both;
  }
`

class Toast extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    zIndex: PropTypes.number,
    duration: PropTypes.number,
    onRemove: PropTypes.func,
    variant: PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
    // Children ??
    // children: PropTypes.node,
    hasCloseButton: PropTypes.bool,
    isShown: PropTypes.bool,
  }

  static defaultProps = {
    variant: 'info',
  }

  state = {
    isShown: true,
    height: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (Object.hasOwnProperty.call(nextProps, 'isShown')) {
      this.setState({ isShown: nextProps.isShown })
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  close = () => {
    this.clearCloseTimer()
    this.setState({ isShown: false })
  }

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, this.props.duration * 1000)
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  handleMouseEnter = () => {
    this.clearCloseTimer()
  }

  handleMouseLeave = () => {
    this.startCloseTimer()
  }

  onRef = ref => {
    if (ref === null) return

    const { height } = ref.getBoundingClientRect()
    this.setState({ height })
  }

  render() {
    return (
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={this.state.isShown}
        onExited={this.props.onRemove}
      >
        {state => (
          <ScToastContainer
            data-state={state}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              height: this.state.height,
              zIndex: this.props.zIndex,
              marginBottom: this.state.isShown ? 0 : -this.state.height,
            }}
          >
            <div ref={this.onRef} style={{ padding: 8 }}>
              <Alert
                variant={this.props.variant}
                title={this.props.title}
                text={this.props.description}
                isRemovable={this.props.hasCloseButton}
                onRemove={() => this.close()}
                theme={this.props.theme}
              />
            </div>
          </ScToastContainer>
        )}
      </Transition>
    )
  }
}

export default Toast
