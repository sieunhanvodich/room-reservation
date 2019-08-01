import React, { Component } from 'react';
import {Col, Row, Container,Image} from'react-bootstrap';
import trump from '../../resources/images/trump.png';
import putin from '../../resources/images/putin.png';
import un from '../../resources/images/un.png';
import obama from'../../resources/images/obama.png';
import hittler from '../../resources/images/hittler.png';
import einstein from '../../resources/images/einstein.png';
import "./RoomResponsible.css"
class RoomResponsive extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="big"> 
              {/* <Col xs={5} md={6} className="form">
                <Image src={trump} roundedCircle className="image"/>
                <p className="text">Trump </p>
              </Col> */}
              <Col xs={5} md={6} className="form">
                <Image src={putin} roundedCircle className="image"/> 
                <p className="text">Putin</p>
              </Col>
              <Col xs={5} md={6} className="form">
                <Image src={un} roundedCircle className="image" />
                <p className="text"> JongUn </p>
              </Col>
              <Col xs={5} md={6} className="form">
                <Image src={obama} roundedCircle className="image" />
                <p className="text"> Obama </p>
              </Col>
              <Col xs={5} md={6} className="form">
                <Image src={hittler} roundedCircle className="image" />
                <p className="text"> Hittler </p>
              </Col>
              <Col xs={5} md={6} className="form">
                <Image src={einstein} roundedCircle className="image" />
                <p className="text"> Einstein </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RoomResponsive;
