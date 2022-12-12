import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button3.css'

const PrimaryPinkButton3 = (props) => {
  return (
    <div className="primary-pink-button3-container">
      <button className="primary-pink-button3-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton3.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton3.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton3
