import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button6.css'

const PrimaryPinkButton6 = (props) => {
  return (
    <div className="primary-pink-button6-container">
      <button className="primary-pink-button6-button ButtonSmall button">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton6.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton6.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton6
