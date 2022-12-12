import React from 'react'

import PropTypes from 'prop-types'

import './component8.css'

const Component8 = (props) => {
  return (
    <div className="component8-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component8-image"
      />
    </div>
  )
}

Component8.defaultProps = {
  image_src: '/playground_assets/cck-800w.png',
  image_alt: 'image',
}

Component8.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component8
