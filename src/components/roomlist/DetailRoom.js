import React, { Component } from 'react';
import { Row, Col, Container, Image, Button, Badge } from 'react-bootstrap'

import './DetailRoom.css'
import { Link } from 'react-router-dom'

class DetailRoom extends Component {
  render() {
    return (
      <Container className="container">
        <Row>
          <Col xl={3} lg={3} xs={12}>
            <div>
              <Image className="image" src={this.props.data.image} rounded />
              <Link to="/booking-screen"><Button className="btn-book">Book</Button></Link>
            </div>
          </Col>
          <Col xl={9} lg={9} xs={12}>
            <div className="flex-container">
              <span>8:30-9:00</span>
              <span>9:00-9:30</span>
              <span>9:30-10:00</span>
              <span>10:30-11:00</span>
              <span>11:00-11:30</span>
              <span>11:30-12:00</span>
              <span>13:00-13:30</span>
              <span>13:30-14:00</span>
              <span>14:00-14:30</span>
              <span>14:30-15:00</span>
              <span>15:00-15:30</span>
              <span>15:30-16:00</span>
              <span>16:30-17:00</span>
              <span>17:00-17:30</span>
              <span>17:30-18:00</span>
              <span>18:30-19:00</span>
              <span>19:00-19:30</span>
              <span>19:30-20:00</span>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          </Col>
          <div className="describe">
            <h3 className="description">Description</h3>
            <h1>{this.props.data.name}</h1>
            <div className="detail">
              <div>Position: {this.props.data.position}</div>
              <div>Capacity: {this.props.data.capacity} </div>
              <div>Detail: </div>
              <p>{this.props.data.description}</p>

              <div>
                <Badge variant="success">Booked</Badge>
                <Badge variant="danger">Daily Book</Badge>
                <Badge variant="warning">Weekly Book</Badge>
                <Badge variant="info">Monthly Book</Badge>
               

              </div>
            </div>

          </div>
        </Row>
      </Container>
    );
  }
}

export default DetailRoom;

