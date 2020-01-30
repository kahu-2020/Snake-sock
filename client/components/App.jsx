import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home'
import Bikes from './Bikes'
import Trixie from './Trixie'
import Santino from './Santino'


import data from '../../data/data'

const App = () => {
  return (
    <Router>
      
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/Bikes' render={(props) => <Bikes {...props} bikeData={data.Bikes} />} />
        <Route path="/trixie" render={(props) => <Trixie {...props} trixie={data.Trixie} />} />
        <Route path="/Santino" render={(props) => <Santino {...props} santino={data.Santino} />} />

      </div>
    </Router>
  )
}

export default App

