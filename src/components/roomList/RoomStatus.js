import React, { Component } from 'react';

class RoomStatus extends Component {
  render() {
    return (
      <div>
        <div className="borderfree">
          <div></div>
          <div>Free</div>
        </div>
        <div>
          <div className="borderbooked"></div>
          <div>Booked</div>
        </div>
        <div>Booked (per week)</div>
        <div>Booked (per month)</div>
      </div>
    );
  }
}

export default RoomStatus;
