import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className="component7-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component7-image"
      />
    </div>
  )
}

Component7.defaultProps = {
  image_src: '/playground_assets/brawlers-800w.png',
  image_alt: 'image',
}

Component7.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component7
