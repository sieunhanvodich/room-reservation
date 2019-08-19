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
              {this.props.timearr.map((value, index) => {
                return (
                  <span className={value.type}>{`${value.start} - ${value.end}`}</span>
                )
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          </Col>
          <div className="describe">
            <h3 className="description">Description</h3>
            <h1>{this.props.data.name}</h1>
            <div className="detail-room">
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

