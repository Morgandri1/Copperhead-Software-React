import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button4.css'

const PrimaryPinkButton4 = (props) => {
  return (
    <div className="primary-pink-button4-container">
      <button className="primary-pink-button4-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton4.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton4.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton4
