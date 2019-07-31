import React, { Component } from 'react';
import DatePicker from '../datePicker/DatePicker';
import ListMeeting from '../ListMeeting/ListMeeting';
import { Modal, Button } from 'react-bootstrap'
import './contentHomeUser.css'
import "react-datepicker/dist/react-datepicker.css";

class ContentHomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  };

  handleClose() {
    this.setState({ show: false });
  };

  render() {
    let listUpcomming = [1, 2, 3];
    let listOwnMeeting = [1, 2, 3];
    let listInvitedMeeting = [1, 2, 3, 4];
    return (
      <div className="contentHomeUser">
        <DatePicker></DatePicker>
        <div className="myInfo">
          <h4 className="mt-3">Meeting upcomming</h4>
          <ListMeeting Meetings={listUpcomming} onClickCard={this.handleShow} />

          <h4 className="mt-3">Your Meeting</h4>
          <ListMeeting Meetings={listOwnMeeting} onClickCard={this.handleShow} />

          <h4 className="mt-3">Invited Meeting</h4>
          <ListMeeting Meetings={listInvitedMeeting} onClickCard={this.handleShow} />
          <Modal show={this.state.show} onHide={this.handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Header</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This is body
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}


export default ContentHomeUser;
