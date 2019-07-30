import React, { Component } from 'react';
import {Table, Col, Row} from 'react-bootstrap';
import "./RoomList.css"
import RoomCalendar from '../components/roomCalendar/RoomCalendar';

class RoomList extends Component {
  render() {
    return (
      <div>
        <div className="headname"> ROOM LIST</div>
        <Row>
        <Col lg={10} >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Room</th>
              <th>IOT</th>
              <th>AWS</th>
              <th>AZURE</th>
              <th>IOS</th>
              <th>ANDROID</th>
              <th>WINDOW</th>
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
              {/* <td><Calendar /></td> */}
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
              {/* <th>Responsible</th> */}
           
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
          </tbody>
        </Table>
        </Col>
        <Col>
          <Row><RoomCalendar /></Row>
          <Row>Responsible</Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default RoomList;
