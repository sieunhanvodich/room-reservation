import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './datePicker.css'
import moment from 'moment'
import DataHome from '../../services/UserService'


export default class DatePickerr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    let dateFormatted = moment(this.state.date).format('DD-MM-YYYY')
    DataHome.getDataHome(dateFormatted)
  }

  onChange = async date => this.setState({ date }, () => {
    let dateFormatted = moment(date).format('DD-MM-YYYY')
    DataHome.getDataHome(dateFormatted)
  })



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
