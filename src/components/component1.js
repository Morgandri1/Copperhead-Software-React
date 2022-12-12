import React from 'react'

import ListItem from './list-item'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <ListItem
        title="1. Always in Sync"
        new_prop="Call or Text us"
        description="You can call or text us at (540) 395-3482"
      ></ListItem>
      <ListItem
        title="2. Work With Any Team"
        new_prop="Email"
        description="Your can also contact us via email at service.copperhead@gmail.com"
      ></ListItem>
      <a
        href="https://discord.gg/invite/"
        target="_blank"
        rel="noreferrer noopener"
        className="component1-link"
      >
        <ListItem
          title="3. A Productivity Platform"
          new_prop="Discord"
          description="You can also join the Discord"
          className="component1-component2"
        ></ListItem>
      </a>
      <ListItem
        title="3. A Productivity Platform"
        new_prop="Join the team"
        description="Join the team Interested in joining the team? Email us, or join the discord and open a ticket to learn about team roles, compensation, and more."
      ></ListItem>
    </div>
  )
}

export default Component1
