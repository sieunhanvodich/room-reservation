import React, { Component } from 'react';
import { Table, Col, Row, } from 'react-bootstrap';
import "./RoomList.css"
import RoomCalendar from '../components/roomCalendar/RoomCalendar';
import RoomStatus from '../components/roomStatus/RoomStatus';
import RoomResponsible from '../components/roomResponsible/RoomResponsible';
import { jsxElement } from '@babel/types';

class RoomList extends Component {
  constructor(props) {
    super(props);
    var d=1;
    this.state = {
    
      data: {
        times: "10:30",
        rooms: "IOS",
        name: "IOS",
      },
      data1: [{
        times: "10:30",
        rooms: "IOS",
        name: "IOS"
      }, {

      }, {
        
      }]
    ,
      times: ["10:00","10:30", "12:30"],
      rooms: ["Time", "IOT", "AWS", "AZURE", "IOS", "ANDROID", "WINDOWS"]

    }
  }

  
  render() {
    const room = this.state.rooms.map((room) => {
     
      return (
        <th className="room">{room}</th>
      )
    })
    const time = this.state.times.map((time) => {
      return (
        <tr className="time">
          <td>{time}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
    })

    
    return (
      <div>
        <div className="headname">ROOM LIST</div>
        <div> <RoomStatus /></div>
        <Row className="test">
          <Col lg={10} md={11} xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>{room}</tr>
              </thead>
              <tbody>
                {time}
              
              </tbody>
            </Table>
          </Col>
        <Col lg={1} md={8} xs={12}>
          <div className="roomcalendar">
            <Row><RoomCalendar /></Row>
          </div>
          <div id="responsible">
            Responsible
          </div>
          <Row>
            <RoomResponsible />
          </Row>
        </Col>
        </Row>
      </div >
    )


  }
  //   render() {
  //     return (
  //       <div>
  //         <div className="headname"> ROOM LIST</div>
  //         <div> <RoomStatus /></div>
  //         <Row className='test'>
  //           <Col lg={10} md={11} xs={12}>
  //             <Table striped bordered hover>
  //               <thead>
  //                 <tr>
  //                   <th>Room</th>
  //                   <th className="room">IOT</th>
  //                   <th className="room">AWS</th>
  //                   <th className="room">AZURE</th>
  //                   <th className="room">IOS</th>
  //                   <th className="room">ANDROID</th>
  //                   <th className="room">WINDOWS</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 <tr>
  //                   <td>8:30</td>
  //                   <td>{this.state.value}</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>9:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>9:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>10:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>10:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>11:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>11:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>12:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>12:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>13:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>13:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>14:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>14:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>15:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>15:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>

  //                 </tr>
  //                 <tr>
  //                   <td>16:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>16:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>17:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>17:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>18:00</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //                 <tr>
  //                   <td>18:30</td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                   <td></td>
  //                 </tr>
  //               </tbody>
  //             </Table>
  //           </Col>
  //           <Col lg={1} md={8} xs={12}>
  //             <div className="roomcalendar">
  //               <Row><RoomCalendar /></Row>
  //             </div>

  //             <div id="responsible">
  //               Responsible
  //           </div>
  //             <Row>
  //               <RoomResponsible />
  //             </Row>
  //           </Col>
  //         </Row>
  //       </div>
  //     );
  //   }
}

export default RoomList;
