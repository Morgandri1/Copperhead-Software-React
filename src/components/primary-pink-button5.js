import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button5.css'

const PrimaryPinkButton5 = (props) => {
  return (
    <div className="primary-pink-button5-container">
      <button className="primary-pink-button5-button ButtonSmall button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton5.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton5.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton5
