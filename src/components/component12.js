import React from 'react'

import PropTypes from 'prop-types'

import './component12.css'

const Component12 = (props) => {
  return (
    <div className="component12-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component12-image"
      />
      <h5 className="component12-text HeadingThree">{props.heading}</h5>
      <span className="component12-text1">{props.text}</span>
    </div>
  )
}

Component12.defaultProps = {
  image_src:
    '/playground_assets/map-clip-art-images-free-free-clipart-images-200h.png',
  heading: 'Heatmap API',
  image_alt: 'image',
  text: 'Our robust heatmapping API, fit for any app or website.',
}

Component12.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Component12
