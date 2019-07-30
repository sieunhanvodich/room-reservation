import React, { Component } from 'react';
import "./RoomStatus.css"

class RoomStatus extends Component {
  render() {
    return (
      <div>
        <div className="borderfree">
          <div id="borderfree"></div>
          <div>Free</div>
        </div>
        <div className="borderbooked">
          <div id="borderbooked"></div>
          <div>Booked</div>
        </div>
        <div className="borderbookday">
          <div id="borderbookday"></div>
          <div>Daily Booked</div>
        </div>
        <div className="borderbookweek">
          <div id="borderbookweek"></div>
          <div>Weekly Booked</div>
        </div>
        <div className="borderbookmonth">
          <div id="borderbookmonth"></div>
          <div>Monthly Booked</div>
        </div>
      </div>
    );
  }
}

export default RoomStatus;
