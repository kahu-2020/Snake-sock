import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home}/>
      </div>
    </Router>
  )
}

export default App
