import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink">
            <span className="Large">Copperhead Software</span>
            <br className=""></br>
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-text2">
              <span className="header-text3">Home</span>
              <br className=""></br>
            </Link>
            <Link to="/monarch" className="header-navlink1">
              {props.Monarch}
            </Link>
            <a href="https://senja.io/p/copperhead-software/testimonials" className='header-navlink1'>
              Testimonials
            </a>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <a
                href="#contact"
                className="header-link"
              >
                <PrimaryPinkButton
                  button="Contact Now"
                  className="header-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  Monarch: 'Monarch',
  rootClassName: '',
}

Header.propTypes = {
  Monarch: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
