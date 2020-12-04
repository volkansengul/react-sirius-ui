import React from 'react'
import ReactDOM from 'react-dom'
import ToastManager from './ToastManager'

const ID = 'muhsis-toaster'
const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

class Toaster {
  constructor(theme) {
    if (!isBrowser) return
    let container

    const element = document.getElementById(ID)
    if (element) {
      container = element
    }
    // Create container if it doesn't exist yet.
    else {
      container = document.createElement('div')
      container.id = ID
      document.body.appendChild(container)
    }

    ReactDOM.render(
      <ToastManager
        bindNotify={this.bindNotify}
        bindGetToasts={this.bindGetToasts}
        bindCloseAll={this.bindCloseAll}
        theme={theme}
      />,
      container,
    )
  }

  bindNotify = handler => {
    this.notifyHandler = handler
  }

  bindGetToasts = handler => {
    this.getToastsHandler = handler
  }

  bindCloseAll = handler => {
    this.closeAllHandler = handler
  }

  getToasts = () => {
    return this.getToastsHandler()
  }

  closeAll = () => {
    return this.closeAllHandler()
  }

  info = (title, description, settings = {}) => {
    return this.notifyHandler(title, description, {
      ...settings,
      variant: 'info',
    })
  }

  success = (title, description, settings = {}) => {
    return this.notifyHandler(title, description, {
      ...settings,
      variant: 'success',
    })
  }

  warning = (title, description, settings = {}) => {
    return this.notifyHandler(title, description, {
      ...settings,
      variant: 'warning',
    })
  }

  danger = (title, description, settings = {}) => {
    return this.notifyHandler(title, description, {
      ...settings,
      variant: 'danger',
    })
  }
}

export default Toaster
