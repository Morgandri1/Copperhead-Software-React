import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button2.css'

const PrimaryPinkButton2 = (props) => {
  return (
    <div className="primary-pink-button2-container">
      <button className="primary-pink-button2-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton2.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton2.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton2
