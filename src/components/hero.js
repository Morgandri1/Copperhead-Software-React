import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <div className="hero-container">
        <div className="hero-card">
          <h1 className="hero-text">
            <span className="HeadingOne">Copperhead Software</span>
            <br></br>
          </h1>
          <h1 className="hero-text3 HeadingOne">{props.heading}</h1>
          <span className="hero-text4">
            <span>
              Copperhead Software is a small team of developers, marketers, and
              server architects who want to make your community flourish.
            </span>
            <br className="Lead"></br>
          </span>
          <div className="hero-container1">
            <div className="hero-container2">
              <a
                href="https://copperheadsoftware.co/#contact"
                className="hero-link"
              >
                <PrimaryPinkButton
                  button="contact us"
                  className="hero-component"
                ></PrimaryPinkButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  heading: 'Choose the best',
  rootClassName: '',
}

Hero.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero
