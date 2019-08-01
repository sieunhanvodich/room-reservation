import React from 'react';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import './datePicker.css'
export default class DatePickerr extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedDate: new Date()
    };
    this.onChange = this.onChange.bind(this);
    console.log(this.state.selectedDate);
  }

  onChange(date) {
    this.setState({
      selectedDate: date
    });
    console.log(date)
  }
 
  render() {
    return (
      <div className="datePicker">
        <div>
          <h4 className="title">Booking Details</h4>
          <hr style={{ borderColor: 'white' }} />
          <h5 className="title1">Date: </h5>
        </div>
        <DatePickerInput
          onChange={this.onChange}
          value={this.state.selectedDate}
        />
        <DatePicker className="calendar" onChange={this.onChange} value={this.state.selectedDate} />
      </div>
    );
  }
}
