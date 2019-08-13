import React, { Component } from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import RouterURL from './config/RouterURL';
import { BrowserRouter as Router} from "react-router-dom";
import HeaderHomeScreen from './components/HeaderHomeScreen';


class App extends Component {

  render() {
    return (
      <Router>
        <HeaderHomeScreen />
        <RouterURL />
      </Router>

    )
  }
}

export default App
