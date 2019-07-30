import React, { Component } from 'react';
import DatePicker from '../datePicker/DatePicker';
import Meeting from '../Meeting/Meeting';
import {Container} from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";

class ContentHomeUser extends Component {
  constructor(props) {
    super(props);
  
    
  }
  render() {
    return (
      <Container>
        <DatePicker></DatePicker>
        {/* <Meeting /> */}
      </Container>
    );
  }
}


export default ContentHomeUser;
