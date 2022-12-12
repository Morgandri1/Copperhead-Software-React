import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Builder from './views/builder'
import Monarch from './views/monarch'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Builder} exact path="/builder" />
        <Route component={Monarch} exact path="/monarch" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
