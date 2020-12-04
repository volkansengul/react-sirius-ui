import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Toast from './Toast'

const ScToastWrapper = styled.span`
  max-width: 500px;
  margin: 0 auto;
  top: 0.5rem;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 30;
  pointer-events: none;
`

class ToastManager extends PureComponent {
  static idCounter = 0

  static propTypes = {
    bindNotify: PropTypes.func.isRequired,
    bindGetToasts: PropTypes.func.isRequired,
    bindCloseAll: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)

    props.bindNotify(this.notify)
    props.bindGetToasts(this.getToasts)
    props.bindCloseAll(this.closeAll)

    this.state = {
      toasts: [],
    }
  }

  getToasts = () => {
    return this.state.toasts
  }

  closeAll = () => {
    this.getToasts().forEach(toast => toast.close())
  }

  notify = (title, description, settings) => {
    const instance = this.createToastInstance(title, description, settings)

    this.setState(previousState => {
      return {
        toasts: [instance, ...previousState.toasts],
      }
    })

    return instance
  }

  createToastInstance = (title, description, settings) => {
    const id = ++ToastManager.idCounter

    return {
      id,
      title,
      description,
      hasCloseButton: settings.hasCloseButton || true,
      duration: settings.duration || 5,
      close: () => this.closeToast(id),
      variant: settings.variant,
    }
  }

  closeToast = id => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.map(toast => {
          if (toast.id === id) {
            return {
              ...toast,
              isShown: false,
            }
          }

          return toast
        }),
      }
    })
  }

  removeToast = id => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(toast => toast.id !== id),
      }
    })
  }

  render() {
    return (
      <ScToastWrapper>
        {this.state.toasts.map(({ id, title, description, ...props }) => {
          return (
            <Toast
              key={id}
              title={title}
              description={description}
              onRemove={() => this.removeToast(id)}
              {...props}
              theme={this.props.theme}
            />
          )
        })}
      </ScToastWrapper>
    )
  }
}

export default ToastManager
