import React, { Component } from 'react';
import { Form, Row, Col } from "react-bootstrap"
class RoomSearch extends Component {
  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={5}>
            Room name:
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="email" placeholder="Choose room" />
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default RoomSearch;
