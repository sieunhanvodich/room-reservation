import React from 'react';
import { Card } from 'react-bootstrap';
import { GoClock } from 'react-icons/go';
import { FaRunning } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import './Meeting.css';

const Meeting = ({onClickShowDetail, content}) => {
    return (
        <Card className="m-3 meeting" onClick={onClickShowDetail}>
          <Card.Body>
            <Card.Title>{content.name}</Card.Title>
            <Card.Subtitle><IoIosHome /> Room {content.room}</Card.Subtitle>
            <Card.Text><GoClock /> {content.from}-{content.to}</Card.Text>
            <div className="card-text">{content.active ? <FaRunning className="float-left"/> : null} <h6 className="float-right d-inline">Detail</h6></div>
          </Card.Body>
        </Card>
    )
}

export default Meeting;
