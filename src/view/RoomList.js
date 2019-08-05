import React, { Component } from 'react';
import Contents from '../components/roomlist/Contents';
import Datepickerr from '../components/roomlist/Datepicker'
import {Button} from 'react-bootstrap'
import './RoomList.css'
import RcQueueAnim from 'rc-queue-anim';


class RoomList extends Component {
  render() {
    return (
     
      <div>
      <RcQueueAnim delay={200}>
        <h1 key="1" className="headname">ROOM LIST</h1>
        <div key="2" className="head">
          <Datepickerr />
          <Button className="btn-submit" variant="info">Submit</Button>
        </div>
        <Contents key="3"/>
        </RcQueueAnim>
      </div>
      
    );
  }
}

export default RoomList;
