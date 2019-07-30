import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import DatePicker from '../datePicker/DatePicker';


import "react-datepicker/dist/react-datepicker.css";

class ContentHomeUser extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    return (
      <div>
        <DatePicker></DatePicker>
        {/* <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>          
            <Nav.Link eventKey="/aaaaa">Phòng đã đặt</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/home">Cuộc họp</Nav.Link>
          </Nav.Item>
        </Nav> */}
        
      </div>
    );
  }
}

export default ContentHomeUser;
