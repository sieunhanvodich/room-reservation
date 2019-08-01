import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from '../datePicker/DatePicker';
import ListMeeting from '../ListMeeting/ListMeeting';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { GoClock, GoPerson, GoOrganization } from 'react-icons/go';
import Select from 'react-select';
import './contentHomeUser.css'
import "react-datepicker/dist/react-datepicker.css";

const ContentHomeUser = ({ listMeeting, show, handleShow, handleClose, currentDetailMeeting, handleAddMember, handleRemoveMember, handleRemoveMeeting }) => {
  let input;

  return (
    <div className="contentHomeUser">
      <DatePicker></DatePicker>
      <div className="myInfo col-12">
        <h5 className="mt-3"><GoPerson />  Your Meeting</h5>
        <ListMeeting Meetings={listMeeting.own} onClickCard={(detail) => handleShow(detail)} />

        <h5 className="mt-3"><GoOrganization />  Invited Meeting</h5>
        <ListMeeting Meetings={listMeeting.invited} onClickCard={(detail) => handleShow(detail)} />
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{currentDetailMeeting.name}</h3>
            <h4>Room: {currentDetailMeeting.room}</h4>
            <h6>Time: From {currentDetailMeeting.from} to {currentDetailMeeting.to}</h6>
            <h5>Description: {currentDetailMeeting.description}</h5>
            <ul className="list-group">
              {currentDetailMeeting.isOwn ? 'List member:' : ''}
              {currentDetailMeeting.isOwn && currentDetailMeeting.members && currentDetailMeeting.members.map((member, index) => (
                <li key={index} className="list-group-item">{member.name}     <FaTimes onClick={() => handleRemoveMember(member.id)} /></li>
              ))}
              { currentDetailMeeting.isOwn ? 
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                      return;
                    };
                    handleAddMember(input.value);
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
            {currentDetailMeeting.isOwn ? <Button variant="secondary" onClick={() => handleRemoveMeeting(currentDetailMeeting.id)}>Delete meeting</Button> : null}
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.home.show,
    currentDetailMeeting: state.home.currentDetailMeeting,
    listMeeting: state.home.listMeeting
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleShow: (currentDetail) => dispatch({ type: 'SHOW_MODAL', currentDetail: currentDetail }),
    handleClose: () => dispatch({ type: 'CLOSE_MODAL' }),
    handleAddMember: (newMember) => dispatch({ type: 'ADD_MEMBER', newMember: newMember }),
    handleRemoveMember: (idMember) => dispatch({ type: 'REMOVE_MEMBER', idMember: idMember }),
    handleRemoveMeeting: (idMeeting) => dispatch({ type: 'REMOVE_MEETING', idMeeting: idMeeting })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentHomeUser);

