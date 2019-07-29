import React, { Component } from 'react'
import './App.css'
import UserService from './services/UserService'
import { Navbar, Nav } from 'react-bootstrap'
import RouterURL from './config/RouterURL'
import { BrowserRouter as Router } from "react-router-dom";
import logo from './resources/img/user.png'

export default class App extends Component {
  componentDidMount() {
    UserService.getUsersInfo()
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Rom Reservation</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">List Room</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Navbar.Brand>
              <img
                src={logo}
                width="30"
                height="30"
              />
            </Navbar.Brand>
            <Nav>
              <a style={{color:'white'}} href="#"><u>DuyNhu</u></a>
            </Nav>
          </Navbar>
        </div>
        <div className="container">
          <RouterURL />
        </div>
      </Router>
    )
  }
}

