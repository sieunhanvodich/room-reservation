import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from '../view/login/Login';
import { Container } from 'react-bootstrap';

class RouterURL extends Component {
  render() {
    return (
      <Container>
        <Route path="/login" component={Login} />
      </Container>
    );
  }
}

export default RouterURL;
