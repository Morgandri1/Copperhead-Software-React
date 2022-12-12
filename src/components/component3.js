import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component3-image"
      />
      <h5 className="component3-text HeadingThree">{props.heading}</h5>
      <span className="component3-text1">{props.text}</span>
    </div>
  )
}

Component3.defaultProps = {
  heading: 'Payment API',
  image_alt: 'image',
  text: 'A robust, easy-to-use payment API for tracking projects and payments',
  image_src: '/playground_assets/dollar-vector-icon-png_296041-200h.png',
}

Component3.propTypes = {
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component3
