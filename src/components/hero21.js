import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton8 from './primary-pink-button8'
import './hero21.css'

const Hero21 = (props) => {
  return (
    <div className="hero21-hero">
      <div className="hero21-container">
        <div className="hero21-card">
          <h1 className="hero21-text">
            <span className="HeadingOne">Copperhead Software</span>
            <br></br>
          </h1>
          <h1 className="hero21-text3 HeadingOne">{props.heading}</h1>
          <span className="hero21-text4">
            <span>
              Copperhead Software is a small team of developers, marketers, and
              server architects who want to make your community flourish.
            </span>
            <br className="Lead"></br>
          </span>
          <div className="hero21-container1">
            <div className="hero21-container2">
              <a
                href="https://copperheadsoftware.co/#contact"
                className="hero21-link"
              >
                <PrimaryPinkButton8
                  button="contact us"
                  className="hero21-component"
                ></PrimaryPinkButton8>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero21.defaultProps = {
  heading: 'Choose the best',
}

Hero21.propTypes = {
  heading: PropTypes.string,
}

export default Hero21
