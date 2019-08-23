import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'
import moment from 'moment'
import sendDateToServer from '../../services/UserService'
class Datepickerr extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    }
  }
  componentDidMount() {
    let formatDate = moment(this.state.startDate).format('DD-MM-YYYY')
    console.log(formatDate)
    sendDateToServer.getDataDate(formatDate)
    this.props.onReceive(formatDate)
  }

  handleChange = async date => this.setState({ startDate: date}, () => {
    let formatDate = moment(date).format('DD-MM-YYYY')
    sendDateToServer.getDataDate(formatDate)
    this.props.onReceive(formatDate)
  })
  render() {
  
    return (
      <DatePicker calendarClassName="rasta-stripes"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Datepickerr;
