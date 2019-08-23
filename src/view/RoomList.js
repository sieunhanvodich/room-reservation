import React, { Component } from 'react';
import Contents from '../components/roomlist/Contents';
import Datepickerr from '../components/roomlist/Datepicker'
import { Button } from 'react-bootstrap'
import './RoomList.css'
import RcQueueAnim from 'rc-queue-anim';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date : ''
    }
  }
  onReceiveData = (date) =>{
    this.setState({
      date : date
    })
  }
  render() {
    
    return (
      <div className="title-roomlist">
        <RcQueueAnim delay={200}>
          <h1 key="1" className="headname">ROOM LIST</h1>
          <div key="2" className="head" >
            <Datepickerr onReceive={this.onReceiveData}/>
            <Button className="btn-submit" variant="info">Submit</Button>
          </div>
          <Contents key="3" date={this.state.date} />
        </RcQueueAnim>
      </div>

    );
  }
}

export default RoomList;

