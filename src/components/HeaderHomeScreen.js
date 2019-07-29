import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class HeaderHomeScreen extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="title">Rom-Reservation</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderHomeScreen;
