import React, { Component } from 'react';
import user from '../resources/img/user.png'
import logo from '../resources/img/reserve.png'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HeaderHomeScreen.css'

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
            <Link className="nav-link" to="/room-list">Room List</Link>
            <Link className="nav-link" to="/booking-screen">Book Room</Link>

          </Nav>
          <div className="infor-user">
            <img
              src={user}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            {/* <Nav.Link style={{ color: 'white', fontSize: '15px' }}>DuyNhu</Nav.Link> */}
            <div className="btn-group">
              <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderHomeScreen;
