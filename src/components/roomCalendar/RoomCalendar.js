import React, { Component } from 'react';
import Calendar from 'react-calendar';
import "./RoomCalendar.css"
class RoomCalendar extends Component {
  state = {
    date: new Date(),
    }
    onChange = date => this.setState({})
  
  render() {
    return (
      <div>
         <Calendar className="calendar"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}


export default RoomCalendar;
