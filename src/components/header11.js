import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton5 from './primary-pink-button5'
import './header11.css'

const Header11 = (props) => {
  return (
    <div data-role="Header" className="header11-header">
      <nav className="header11-nav">
        <div className="header11-container">
          <span className="header11-text Large">{props.text}</span>
          <div className="header11-container1">
            <div className="header11-container2">
              <PrimaryPinkButton5 button="buy now"></PrimaryPinkButton5>
            </div>
            <div data-role="BurgerMenu" className="header11-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header11-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header11.defaultProps = {
  text: 'Soft UI Design System',
}

Header11.propTypes = {
  text: PropTypes.string,
}

export default Header11
