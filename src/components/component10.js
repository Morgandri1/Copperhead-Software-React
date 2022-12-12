import React from 'react'

import PropTypes from 'prop-types'

import './component10.css'

const Component10 = (props) => {
  return (
    <div className="component10-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component10-image"
      />
      <h5 className="component10-text HeadingThree">{props.heading}</h5>
      <span className="component10-text1">{props.text}</span>
    </div>
  )
}

Component10.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/dollar-vector-icon-png_296041-200h.png',
  heading: 'Payment API',
  text: 'A robust, easy-to-use payment API for tracking projects and payments',
}

Component10.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Component10
