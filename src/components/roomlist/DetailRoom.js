import React, { Component } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import avata from '../../resources/image/room.png'
import './DetailRoom.css'

class DetailRoom extends Component {
  render() {
    return (
      <Container className="container">
        <Row>
          <Col xl={3} lg={3} xs={12}>
            <div>
              <Image className="image" src={avata} rounded />
              <Button className="btn-book" variant="success">Book</Button>
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
            </div>
          </Col>
        </Row>
        <Row>
          <div className="describe">
            {/* <Button variant="success">Book</Button> */}
            <h3>Description</h3>
            <div className="detail">
              <div>Position: Floor 8</div>
              <div>Capacity: 80 </div>
              <div>Detail: </div>
              <p>The rooms in Ca' Pisani hotel have been realised completely using original pieces of design and are taken care of down to the last detail.
                  Refined style, play of colours and precious materials make the hotel a real jewel of contemporary design. The presence of marbles, precious
                  fabrics and inlaid
                  wood furniture has been designed to guarantee guests maximum comfort and relaxation.</p>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default DetailRoom;
