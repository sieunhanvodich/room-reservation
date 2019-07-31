import React, { Component } from 'react';
import "./RoomStatus.css"
import { Button, ButtonToolbar } from 'react-bootstrap';
class RoomStatus extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button variant="info" className="onedaybook">One day Book</Button>
          <Button variant="success" className="dailybook">Daily Book</Button>
          <Button variant="warning" className="weeklybook">Weekly Book</Button>
          <Button variant="danger" className="monthlybook">Monthly Book</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default RoomStatus;
