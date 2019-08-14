import React, { Component } from 'react';
import user from '../resources/img/user.png'
import logo from '../resources/img/reserve.png'
import { Nav, Navbar, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HeaderHomeScreen.css'
import axios from 'axios'

class HeaderHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      arrInfos: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/home')
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data.user,
          arrInfos: res.data.bookInfos
        }, ()=> console.log(this.state.user))
      })
  }

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
            <DropdownButton id="dropdown-basic-button" title = {this.state.user.name}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderHomeScreen;
