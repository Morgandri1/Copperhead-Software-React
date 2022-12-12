import React from 'react'

import PrimaryPinkButton1 from './primary-pink-button1'
import './header1.css'

const Header1 = (props) => {
  return (
    <div data-role="Header" className="header1-header">
      <nav className="header1-nav">
        <div className="header1-container">
          <span className="header1-text Large">Soft UI Design System</span>
          <div className="header1-container1">
            <div className="header1-container2">
              <PrimaryPinkButton1 button="buy now"></PrimaryPinkButton1>
            </div>
            <div data-role="BurgerMenu" className="header1-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header1-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header1
