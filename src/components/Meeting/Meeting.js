import React from 'react';
import { Tab, Row, Col, Nav, Card } from 'react-bootstrap';

const Meeting = ({onClickShowDetail}) => {
    return (
        <Card className="m-3" style={{width: '14rem', height: "9rem"}} onClick={onClickShowDetail}>
          <Card.Body>
            <Card.Title>Meeting something</Card.Title>
            <Card.Subtitle>Room D1</Card.Subtitle>
            <Card.Text>2h-4h</Card.Text>
            <Card.Link href="/detail" className="float-right">Detail</Card.Link>
          </Card.Body>
        </Card>
    )
}

export default Meeting;