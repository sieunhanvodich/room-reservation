import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const Meeting = ({onClickShowDetail, content}) => {
    return (
        <Card className="m-3" style={{width: '14rem', height: "9rem"}} onClick={onClickShowDetail}>
          <Card.Body>
            <Card.Title>{content.name}</Card.Title>
            <Card.Subtitle>Room {content.room}</Card.Subtitle>
            <Card.Text>{content.from}-{content.to}</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <Card.Link href="/detail" className="float-right">Detail</Card.Link>
          </Card.Footer> */}
        </Card>
    )
}

export default Meeting;
