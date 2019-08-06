import React, { Component } from 'react';
import user from '../resources/img/user.png'
import logo from '../resources/img/reserve.png'
import { Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class HeaderHomeScreen extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Link className="navbar-brand" to="/home-user">
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/home-user">Home</Link>
            <Link className="nav-link" to="/booking-screen">Book Room</Link>
            <Link className="nav-link" to="/room-list">List Room</Link>
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
