import { Component } from 'react'
import canUseDom from 'dom-helpers/util/inDOM'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let portalContainer

class Portal extends Component {
  constructor() {
    super()

    // Fixes SSR (server-side rendering)
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('nui-portal-container', '')
      document.body.appendChild(portalContainer)
    }

    this.el = document.createElement('div')
  }

  componentDidMount() {
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    // Fixes SSR
    if (!canUseDom) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portal
