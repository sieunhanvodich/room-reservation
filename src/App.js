import React, { Component } from 'react'
import './App.css'
import UserService from  './services/UserService'
import { connect } from 'react-redux'
import { saveUserInfo } from './store/actions'
import { BrowserRouter as Router} from "react-router-dom";
import RouterURL from './config/RouterURL'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    UserService.getUsersInfo()
      .then(res => {
        console.log(res)
        this.props.saveUserInfo(res)
      })
  }
  
  render() {
    return (
      <Router>
          <RouterURL></RouterURL>
      </Router>
     
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return state
}

const mapDispatchToProps = () => ({
  saveUserInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
