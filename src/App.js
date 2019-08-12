import React, { Component } from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import RouterURL from './config/RouterURL';
import { PrivateRoute } from './common/PrivateRoute';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderHomeScreen from './components/HeaderHomeScreen';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isLogin = localStorage.getItem('token')
    return (
      <Router>
        {!isLogin && <HeaderHomeScreen />}
        <RouterURL />
      </Router>
    )
  }
}

export default App
