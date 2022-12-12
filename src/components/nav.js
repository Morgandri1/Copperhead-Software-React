import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton6 from './primary-pink-button6'
import './nav.css'

const Nav = (props) => {
  return (
    <nav className="nav-nav">
      <div className="nav-container">
        <span className="nav-text Large">{props.text}</span>
        <div className="nav-container1">
          <div className="nav-container2">
            <PrimaryPinkButton6 button="buy now"></PrimaryPinkButton6>
          </div>
          <div data-role="BurgerMenu" className="nav-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  text: 'Soft UI Design System',
}

Nav.propTypes = {
  text: PropTypes.string,
}

export default Nav
