import React, { Component } from 'react'
import './App.css'
import UserService from  './services/UserService'
import RoomList from './view/RoomList'

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
        <RoomList></RoomList>
      </div>
    )
  }
}

