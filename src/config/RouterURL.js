import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomeScreen from '../view/homescreen/HomeScreen';
import Login from '../view/login/Login';
import { Container } from 'react-bootstrap';

class RouterURL extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/home-user" component={HomeScreen} />
        <Route path="/login" component={Login} />
      </Container>
    );
  }
}

export default RouterURL;
