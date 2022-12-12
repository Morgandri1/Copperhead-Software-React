import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button8.css'

const PrimaryPinkButton8 = (props) => {
  return (
    <div className="primary-pink-button8-container">
      <button className="primary-pink-button8-button ButtonSmall button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton8.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton8.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton8
