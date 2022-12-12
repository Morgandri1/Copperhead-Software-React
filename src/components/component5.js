import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component5-image"
      />
      <h5 className="component5-text HeadingThree">{props.heading}</h5>
      <span className="component5-text1">{props.text}</span>
    </div>
  )
}

Component5.defaultProps = {
  text: 'Our robust heatmapping API, fit for any app or website.',
  image_src:
    '/playground_assets/map-clip-art-images-free-free-clipart-images-200h.png',
  heading: 'Heatmap API',
  image_alt: 'image',
}

Component5.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component5
