import React from 'react'

import PrimaryPinkButton4 from './primary-pink-button4'
import './home1.css'

const Home1 = (props) => {
  return (
    <div data-role="Header" className="home1-header">
      <nav className="home1-nav">
        <div className="home1-container">
          <span className="home1-text Large">Soft UI Design System</span>
          <div className="home1-container1">
            <div className="home1-container2">
              <PrimaryPinkButton4 button="buy now"></PrimaryPinkButton4>
            </div>
            <div data-role="BurgerMenu" className="home1-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home1-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home1
