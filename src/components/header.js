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
