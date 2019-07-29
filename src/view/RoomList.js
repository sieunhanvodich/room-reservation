import React, { Component } from 'react';
import "./RoomList.css"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import RoomSearch from "../components/roomList/RoomSearch"
import RoomStatus from '../components/roomList/RoomStatus';

class RoomList extends Component {
  render() {
    return (
      <div className="container">
        <div className="headname">
        ROOM LIST
        </div>
         <Row className="row1">
          <Col className="col1"><RoomSearch/></Col>
          <Col xs={5}></Col>
          <Col><RoomStatus/></Col>
        </Row>
        <Row className="row2">
          <Col>1 of 3</Col>
          <Col xs={4}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </div>
    );
  }
}

export default RoomList;
