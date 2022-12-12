import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-hero">
      <div className="hero2-container">
        <div className="hero2-card">
          <h1 className="hero2-text">
            <span className="HeadingOne">Copperhead Software</span>
            <br></br>
          </h1>
          <h1 className="hero2-text3 HeadingOne">{props.heading}</h1>
          <span className="hero2-text4">
            <span>
              Copperhead Software is a small team of developers, marketers, and
              server architects who want to make your community flourish.
            </span>
            <br className="Lead"></br>
          </span>
          <div className="hero2-container1">
            <div className="hero2-container2">
              <a
                href="https://copperheadsoftware.co/#contact"
                className="hero2-link"
              >
                <PrimaryPinkButton
                  button="contact us"
                  className="hero2-component"
                ></PrimaryPinkButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  heading: 'Choose the best',
}

Hero2.propTypes = {
  heading: PropTypes.string,
}

export default Hero2
