import React from 'react'

import PropTypes from 'prop-types'

import './component13.css'

const Component13 = (props) => {
  return (
    <div className="component13-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component13-image"
      />
      <h5 className="component13-text HeadingThree">{props.heading}</h5>
      <span className="component13-text1">{props.text}</span>
    </div>
  )
}

Component13.defaultProps = {
  text: 'We offer premade server templates on the cheap, so you can spend minutes on a server, not hours',
  image_alt: 'image',
  heading: 'Server templates',
  image_src: '/playground_assets/91_discord_logo_logos-512-200h.webp',
}

Component13.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component13
