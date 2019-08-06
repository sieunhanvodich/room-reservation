import React, { Component } from 'react';
import RoomList from '../view/RoomList'
import { Route } from "react-router-dom";
import HomeScreen from '../view/homescreen/HomeScreen';
import Login from '../view/login/Login';
import { Container } from 'react-bootstrap';
import BookingScreen from '../view/bookingScreen/BookingScreen';

class RouterURL extends Component {
  render() {
    return (
      <Container >
        <Route path="/room-list" component={RoomList} />
        <Route exact path="/home-user" component={HomeScreen} />
        <Route path="/login" component={Login} />
        <Route exact path="/booking-screen" component={BookingScreen} />
      </Container>
    );
  }
}

export default RouterURL;
