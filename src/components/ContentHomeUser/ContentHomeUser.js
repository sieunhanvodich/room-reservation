import React, { Component } from 'react';
import DatePicker from '../datePicker/DatePicker';
import Meeting from '../Meeting/Meeting';

import "react-datepicker/dist/react-datepicker.css";

class ContentHomeUser extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <DatePicker></DatePicker>
        {/* <Meeting /> */}
      </div>
    );
  }
}

export default ContentHomeUser;
