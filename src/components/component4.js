import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component4-image"
      />
      <h5 className="component4-text HeadingThree">{props.heading}</h5>
      <span className="component4-text1">{props.text}</span>
    </div>
  )
}

Component4.defaultProps = {
  image_alt: 'image',
  heading: 'Monarch',
  image_src: '/playground_assets/monarch-200w.png',
  text: 'Our all-purpose discord bot, the MEE6 killer.',
}

Component4.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Component4
