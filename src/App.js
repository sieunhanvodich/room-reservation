import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from 'react-redux'
import './App.css'
import "react-datepicker/dist/react-datepicker.css"
import RouterURL from './config/RouterURL'
import HeaderHomeScreen from './components/HeaderHomeScreen'
import { loginSuccess } from './store/actions'

class App extends Component {
  render() {
    return (
      <Router>
        {this.props.isLogin && <HeaderHomeScreen />}
        <RouterURL />
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.user.isLogin
  }
}

const mapDispatchToProps = {
  loginSuccess
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

