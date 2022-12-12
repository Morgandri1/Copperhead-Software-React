import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button7.css'

const PrimaryPinkButton7 = (props) => {
  return (
    <div className="primary-pink-button7-container">
      <button className="primary-pink-button7-button ButtonSmall button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton7.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton7.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton7
