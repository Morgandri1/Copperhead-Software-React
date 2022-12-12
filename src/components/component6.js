import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className="component6-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component6-image"
      />
      <h5 className="component6-text HeadingThree">{props.heading}</h5>
      <span className="component6-text1">{props.text}</span>
    </div>
  )
}

Component6.defaultProps = {
  image_alt: 'image',
  text: 'We offer premade server templates on the cheap, so you can spend minutes on a server, not hours',
  heading: 'Server templates',
  image_src: '/playground_assets/91_discord_logo_logos-512-200h.webp',
}

Component6.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component6
