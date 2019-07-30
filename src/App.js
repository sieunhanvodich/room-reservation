import React, { Component } from 'react'
import './App.css'
import UserService from './services/UserService'
import RouterURL from './config/RouterURL'
import { BrowserRouter as Router } from "react-router-dom";
import user from './resources/img/user.png'
import logo from './resources/img/reserve.png'
// import logo from './resources/img/Reservation.png'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

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

        <Navbar bg="primary" variant="dark">
          {/* <Navbar.Brand href="#home">Room Reservation</Navbar.Brand> */}
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">NhuVanDuy</Nav.Link>
              <Nav.Link href="/">List Rom</Nav.Link>
              <Nav.Link href="#link">Book Room</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                <Navbar.Brand href="#home" style={{ display: 'flex', padding:'10px' }}>
                  <img
                    src={user}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                  />
                  <Nav style={{ color: 'blue', fontSize:'15px', marginLeft:'10px'}}><u>nhuvanduy97</u></Nav>
                </Navbar.Brand>
                <NavDropdown.Item href="#action/3.2"><u>Logout</u></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <RouterURL />
        </div>
      </Router>
    )
  }
}

