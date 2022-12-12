import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton2 from './primary-pink-button2'
import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className={`hero1-hero ${props.rootClassName} `}>
      <div className="hero1-container">
        <div className="hero1-card">
          <h1 className="hero1-text">{props.heading}</h1>
          <h1 className="hero1-text1">{props.heading1}</h1>
          <span className="hero1-text2">{props.text}</span>
          <div className="hero1-container1">
            <div className="hero1-container2">
              <PrimaryPinkButton2 button="contact us"></PrimaryPinkButton2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  heading1: 'The MEE6 killer',
  heading: 'Monarch',
  rootClassName: '',
  text: 'Use the better, stronger, and more advanced bot.',
}

Hero1.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Hero1
