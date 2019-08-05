import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterURL from './config/RouterURL';

export default class App extends Component {
  render() {
    return (
      <Router>
        <RouterURL />
      </Router>
    )
  }
}

