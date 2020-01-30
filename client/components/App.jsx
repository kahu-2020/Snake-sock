import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//Data Import
import data from '../../data/data'

//Component Import
import Trixie from './Trixie'
import Santino from './Santino'

const App = () => {
  return (
    <Router>
      <Route path="/Santino" render={(props) => <Santino {...props} santino={data.Santino} />} />
      <Route path="/trixie" render={(props) => <Trixie {...props} trixie={data.Trixie} />} />
    </Router>
  )
}

export default App
