import React, { Component } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

class RoomList extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1">IOT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">AWS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">IOS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">ANDROID</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="">WINDOWS</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <p>a</p>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <p>b</p>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <p>c</p>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <p>d</p>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <p>e</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default RoomList;
