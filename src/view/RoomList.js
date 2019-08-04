import React, { Component } from 'react';
import Contents from '../components/roomlist/Contents';
import Datepickerr from '../components/roomlist/Datepicker'
import {Button} from 'react-bootstrap'


class RoomList extends Component {
  render() {
    return (
      <div>
        <h1>List Room</h1>
        <div>
          <Datepickerr />
          <Button variant="primary">Submit</Button>
        </div>
        <Contents />
      </div>
    );
  }
}

export default RoomList;
