import React, { Component } from 'react';
import {Table, Col, Row,} from 'react-bootstrap';
import "./RoomList.css"
import RoomCalendar from '../components/roomCalendar/RoomCalendar';
import RoomStatus from '../components/roomStatus/RoomStatus';
import RoomResponsible from '../components/roomResponsible/RoomResponsible';

class RoomList extends Component {
  render() {
    return (
      <div>
        <div className="headname"> ROOM LIST</div>
        <div> <RoomStatus/></div>
        <Row>
        <Col lg={10} md={8} sm={6} xs={1}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Room</th>
              <th>IOT</th>
              <th>AWS</th>
              <th>AZURE</th>
              <th>IOS</th>
              <th>ANDROID</th>
              <th>WINDOWS</th>
              {/* <th>Schedule</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>13:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>14:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>14:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>15:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>15:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td>16:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>16:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </Col>
        <Col lg={2} md={4} sm={6} xs={11}>
          <div className="roomcalendar">
          <Row><RoomCalendar /></Row>
          </div>
          <hr className="hr"></hr>
          <div id="responsible"> 
            Responsible
          </div>
          <Row> 
            <RoomResponsible/>
          </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default RoomList;
