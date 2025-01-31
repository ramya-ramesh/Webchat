import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { safeArrayOfItem } from 'helpers'

import ArrowLeft from 'components/svgs/arrowLeft'
import ArrowRight from 'components/svgs/arrowRight'

import './style.scss'

class Menu extends Component {
  constructor (props) {
    super(props)
    document.addEventListener('mousedown', this.handleMouseClick)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleMouseClick)
  }

  handleMouseClick = e => {
    if (
      !this.node.contains(e.target)
      && e.target.id !== 'menu-svg'
      && e.target.id !== 'menu-svg-path'
    ) {
      this.props.closeMenu()
    }
  }

  handleMenuSelection = action => {
    if (action) {
      const { type, title, payload } = action
      const data = {
        type: 'button',
        content: {
          title,
          value: payload,
          type,
        }
      }
      this.props.postbackClick(data)
    }
  }

  render () {
    const { currentMenu, addMenuIndex, removeMenuIndex, closeMenu } = this.props
    const { title, call_to_actions } = currentMenu
    return (
      <div className='Menu' ref={node => (this.node = node)}>
        {!!title && (
          <div onClick={removeMenuIndex} className='MenuHeader'>
            <ArrowLeft className='MenuHeader--SVG' />
            <p className='MenuHeader--Title'>{title}</p>
          </div>
        )}

        {safeArrayOfItem(call_to_actions).map((action, index) => {
          let component = false
          switch (action.type) {
          case 'postback':
            component = (
              <div
                key={index}
                className='MenuElement'
                onClick={() => {
                  this.handleMenuSelection(action)
                  closeMenu()
                }}
              >
                {action.title}
              </div>
            )
            break
          case 'nested':
            component = (
              <div key={index} className='MenuElement' onClick={() => addMenuIndex(index)}>
                <p style={{ flex: 1 }}>{action.title}</p>
                <ArrowRight />
              </div>
            )
            break
          case 'Link': // TODO Should be "web_url" from backend
            component = (
              <a
                key={index}
                className='MenuElement'
                href={action.payload}
                rel='noopener noreferrer'
                target='_self'
              >
                {action.title}
              </a>
            )
            break
          default:
            component = false
          }

          return component
        })}
      </div>
    )
  }
}

Menu.propTypes = {
  currentMenu: PropTypes.object,
  closeMenu: PropTypes.func,
  addMenuIndex: PropTypes.func,
  removeMenuIndex: PropTypes.func,
  postbackClick: PropTypes.func,
}

export default Menu
