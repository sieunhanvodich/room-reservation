import React from 'react';
import { Card } from 'react-bootstrap';
import { GoClock } from 'react-icons/go';
import { FaRunning } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import './Meeting.css';

class Meeting extends React.Component {
  render() {
    return (
      <Card className="m-3 meeting" onClick={this.props.onClickShowDetail}>
        <Card.Body>
          <Card.Title>{this.props.content.name}</Card.Title>
          <Card.Subtitle><IoIosHome className="room"/> Room {this.props.content.room}</Card.Subtitle>
          <p className="card-text time-block"><GoClock className="time"/> {this.props.content.from}-{this.props.content.to}</p>
          <div className="card-text footer">{this.props.content.active ? (<div className="d-inline"><FaRunning className="float-left running"/>Active</div>) : null} <p className="float-right d-inline">Detail</p></div>
        </Card.Body>
      </Card>
  )
  }
}

export default Meeting;
