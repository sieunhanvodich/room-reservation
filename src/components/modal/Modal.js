import React, { Component } from 'react';
import { Modal, Form, Col, Button, ButtonToolbar } from 'react-bootstrap';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import moment from 'moment';

class ModalDetail extends Component {
  render() {
    let input;
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
        <Modal.Header closeButton className="text-center">
          <Modal.Title>{this.props.currentDetailMeeting.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <p>Host: <strong>{this.props.currentDetailMeeting.host_id.name}</strong></p>
          <p>Location: Room {this.props.currentDetailMeeting.room_id.name}</p>
          <p>Time: From {moment(this.props.currentDetailMeeting.from).format('LT')} to {moment(this.props.currentDetailMeeting.to).format('LT')}</p>
          <p>Requirement: {this.props.currentDetailMeeting.requirement}</p>
          <p>Description: {this.props.currentDetailMeeting.description}</p>
          <ul className="list-group">
            {this.props.currentDetailMeeting.isOwn ? (<p>Members: {this.props.currentDetailMeeting.invited.length}</p>) : null}
            {this.props.currentDetailMeeting.isOwn && this.props.currentDetailMeeting.invited && this.props.currentDetailMeeting.invited.map((member, index) => (
              <li key={member._id} className="list-group-item">{member.user_id.name}<span className="badge badge-light  "><FaTimes onClick={() => this.props.handleRemoveMember(member.id)} /></span></li>
            ))}
            {this.props.currentDetailMeeting.isOwn ?
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  if (!input.value.trim()) {
                    return;
                  };
                  this.props.handleAddMember(input.value);
                  input.value = '';
                }}
              >
                <input
                  className="form-control"
                  ref={node => input = node}
                />
              </Form> : ''
            }
          </ul>
        </Modal.Body>
        <Modal.Footer>
          {this.props.currentDetailMeeting.isOwn ? <Button variant="secondary" onClick={() => this.props.handleRemoveMeeting(this.props.currentDetailMeeting.id)}>Delete meeting</Button> : null}
          <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalDetail;
