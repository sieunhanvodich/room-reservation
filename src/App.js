import React, { Component } from 'react'
import './App.css'
import RouterURL from './config/RouterURL'
import { BrowserRouter as Router } from "react-router-dom";
import user from './resources/img/user.png'
import logo from './resources/img/reserve.png'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/homeUser">NhuVanDuy</Nav.Link>
              <Nav.Link href="#pricing">List Room</Nav.Link>
              <Nav.Link href="#pricing">Book Room</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand className="inforUser">
              <img
                src={user}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              <Nav.Link href="#deets">DuyNhu</Nav.Link>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <RouterURL />
        </div>
      </Router>
    )
  }
}

