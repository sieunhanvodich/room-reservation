import React, { Component } from 'react'
import './App.css'
import UserService from  './services/UserService'

export default class App extends Component {
  componentDidMount() {
    UserService.getUsersInfo()
      .then(res => {
        console.log(res)
      })
  }
  
  render() {
    return (
      <div className="App">
        Helloo
      </div>
    )
  }
}

