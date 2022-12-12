import React from 'react'

import PrimaryPinkButton7 from './primary-pink-button7'
import './monarch2.css'

const Monarch2 = (props) => {
  return (
    <div data-role="Header" className="monarch2-header">
      <nav className="monarch2-nav">
        <div className="monarch2-container">
          <span className="monarch2-text">
            <span className="Large">Copperhead Software</span>
            <br></br>
          </span>
          <div className="monarch2-menu">
            <span className="monarch2-text3">
              <span> </span>
              <br></br>
            </span>
          </div>
          <div className="monarch2-container1">
            <div className="monarch2-container2">
              <a
                href="https://copperheadsoftware.co/#contact"
                className="monarch2-link"
              >
                <PrimaryPinkButton7
                  button="Contact Now"
                  className="monarch2-component"
                ></PrimaryPinkButton7>
              </a>
            </div>
            <div data-role="BurgerMenu" className="monarch2-burger-menu">
              <svg viewBox="0 0 1024 1024" className="monarch2-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Monarch2
