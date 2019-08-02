import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomeScreen from '../view/homescreen/HomeScreen';
import { Container } from 'react-bootstrap';

class RouterURL extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/home-user" component={HomeScreen} />
      </Container>
    );
  }
}

export default RouterURL;
