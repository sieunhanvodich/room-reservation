import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class DatePickerr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          Chon ngay
        </div>
        <DatePicker
          dateFormat = "dd/MM/yyyy"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />  
      </div>
    );
  }
}

export default DatePickerr;
