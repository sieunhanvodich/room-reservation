import React, { Component } from 'react';
import user from '../resources/img/user.png'
import logo from '../resources/img/reserve.png'
import { Nav, Navbar } from 'react-bootstrap'

class HeaderHomeScreen extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">
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
            <Nav.Link href="/home-user">Home</Nav.Link>
            <Nav.Link href="#pricing">Book Room</Nav.Link>
            <Nav.Link href="#pricing">List Room</Nav.Link>
          </Nav>
          <Navbar.Brand className="infor-user">
            <img
              src={user}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <Nav.Link style={{ color: 'white', fontSize: '15px' }} href="#deets">DuyNhu</Nav.Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderHomeScreen;
