import React, { Component } from 'react';
import DatePicker from '../datePicker/DatePicker';
<<<<<<< HEAD
import Meeting from '../Meeting/Meeting';

import "react-datepicker/dist/react-datepicker.css";

class ContentHomeUser extends Component {
  constructor(props) {
    super(props);

  }

=======
import {Container} from 'react-bootstrap'


class ContentHomeUser extends Component { 
>>>>>>> d4dca5ce30e9fa000dede9f2b93f1673ce3fb16c
  render() {
    return (
      <Container>
        <DatePicker></DatePicker>
<<<<<<< HEAD
        {/* <Meeting /> */}
      </div>
=======
          
      </Container>
>>>>>>> d4dca5ce30e9fa000dede9f2b93f1673ce3fb16c
    );
  }
}

export default ContentHomeUser;
