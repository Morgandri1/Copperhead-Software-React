import React from 'react'

import PropTypes from 'prop-types'

import './component15.css'

const Component15 = (props) => {
  return (
    <section className={`component15-container ${props.rootClassName} `}>
      <div className="component15-container1">
        <h1 className="component15-text">{props.heading}</h1>
        <span className="component15-text01">{props.text}</span>
        <div className="component15-container2">
          <p className="component15-text02">
            <span className="component15-text03">
              Monarch offers lots of features for moderation, tools, and fun for
              your community.
            </span>
            <br></br>
            <br></br>
            <span>
              Based on Interactions.py, we get the best slash commands and
              discord application integrations.
            </span>
            <br></br>
            <br></br>
            <span>With easy to use configs, we make it easy to convert.</span>
            <br></br>
            <br></br>
            <span>Features:</span>
            <br></br>
            <span>• </span>
            <span>Robust Automod</span>
            <br></br>
            <span>• Autopolling</span>
            <br></br>
            <span>• Automod audit logs for admins</span>
            <br></br>
            <span>• Configurable reaction roles</span>
            <br></br>
            <span>• Lots of moderation tools</span>
            <br></br>
            <span>• Memes and cute animal pictures from reddit</span>
            <br></br>
          </p>
        </div>
      </div>
    </section>
  )
}

Component15.defaultProps = {
  rootClassName: '',
  heading: 'Take your server to the next level',
  text: 'use the new generation of Discord bot, Monarch.',
}

Component15.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Component15
