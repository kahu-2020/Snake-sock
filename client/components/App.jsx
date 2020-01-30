import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Bikes from './Bikes'
import Santino from './Santino'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/Bikes' component={Bikes} />
        <Route path='/Santino' component={Santino} />
        
      </div>
    </Router>
  )
}

export default App
