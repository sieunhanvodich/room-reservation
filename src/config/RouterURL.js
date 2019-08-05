import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import RoomList from '../view/RoomList'

class RouterURL extends Component {
  render() {
    return (
      <Container >
        <Route path="/room-list" component={RoomList} />
      </Container>
    );
  }
}

export default RouterURL;

