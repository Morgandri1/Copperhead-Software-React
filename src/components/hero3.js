import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton2 from './primary-pink-button2'
import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-hero">
      <div className="hero3-container">
        <div className="hero3-card">
          <h1 className="hero3-text">{props.heading}</h1>
          <h1 className="hero3-text1">{props.heading1}</h1>
          <span className="hero3-text2">{props.text}</span>
          <div className="hero3-container1">
            <div className="hero3-container2">
              <PrimaryPinkButton2 button="contact us"></PrimaryPinkButton2>
            </div>
          </div>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="hero3-image"
      />
    </div>
  )
}

Hero3.defaultProps = {
  heading1: 'The MEE6 killer',
  image_alt: 'image',
  text: 'Use the better, stronger, and more advanced bot.',
  image_src: '/playground_assets/curved5-1100w.jpg',
  heading: 'Monarch',
}

Hero3.propTypes = {
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero3
