import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Bikes from './Bikes'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/Bikes' component={Bikes} />
      </div>
    </Router>
  )
}

export default App
