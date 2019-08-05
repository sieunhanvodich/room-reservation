import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'

class Datepickerr extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
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
