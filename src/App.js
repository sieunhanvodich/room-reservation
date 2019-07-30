import React, { Component } from 'react'
import './App.css'
import UserService from  './services/UserService'
import { connect } from 'react-redux'
import { saveUserInfo } from './store/actions'
import Login from './view/login/Login'
// import BookingScreen from './view/bookingScreen/BookingScreen.js'

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
      // <div className="App">
      //   Helloo
      // </div>
      <Login></Login>
      // <BookingScreen></BookingScreen>
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
