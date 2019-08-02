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
            <Card.Subtitle><IoIosHome className="room"/> Room {content.room}</Card.Subtitle>
            <p className="card-text time-block"><GoClock className="time"/> {content.from}-{content.to}</p>
            <div className="card-text footer">{content.active ? (<div className="d-inline"><FaRunning className="float-left running"/>Active</div>) : null} <p className="float-right d-inline">Detail</p></div>
          </Card.Body>
        </Card>
    )
}

export default Meeting;
