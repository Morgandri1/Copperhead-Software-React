import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return (
    <div className="component11-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component11-image"
      />
      <h5 className="component11-text HeadingThree">{props.heading}</h5>
      <span className="component11-text1">{props.text}</span>
    </div>
  )
}

Component11.defaultProps = {
  heading: 'Monarch',
  image_src: '/playground_assets/monarch-200w.png',
  text: 'Our all-purpose discord bot, the MEE6 killer.',
  image_alt: 'image',
}

Component11.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component11
