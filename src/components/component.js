import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text">
        <span>Our easy-to-use payment API has gone commercial</span>
        <br></br>
        <br></br>
        <span>Features:</span>
        <br></br>
        <span>• easy to track clients that owe you</span>
        <br></br>
        <span>• track payment status </span>
        <br></br>
        <span>• enable red warning (&quot;nuke&quot; status)</span>
        <br></br>
        <span>• custom UIDs per client</span>
        <br></br>
      </span>
    </div>
  )
}

export default AppComponent
