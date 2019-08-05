import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './datePicker.css'

export default class DatePickerr extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date }, ()=>{console.log(date)})

  render() {
    return (
      <div className="container-date-picker">
        <div>
          <h3 className="title">Detail</h3>
          <hr className="hr"></hr>
          <h5 className="title">Date:</h5>
        </div>
        <div className="date-picker">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}
