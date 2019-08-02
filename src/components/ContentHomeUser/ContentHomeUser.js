import React from 'react';
import { connect } from 'react-redux';
import ListMeeting from '../ListMeeting/ListMeeting';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { GoPerson, GoOrganization } from 'react-icons/go';
import ReactSelect from '../ReactSelect/ReactSelect';
import './contentHomeUser.css'
import DatePicker from '../datePicker/DatePicker'

import { Row, Container, Col } from 'react-bootstrap'


const ContentHomeUser = ({ listMeeting, show, handleShow, handleClose, currentDetailMeeting, handleAddMember, handleRemoveMember, handleRemoveMeeting }) => {
  let input;

  return (
    // <DatePicker></DatePicker>

    <Container>
      <Row>
        <Col xl={3} lg={4} md={5} sm={12} xs={12}>
          <DatePicker />
        </Col>
        <Col xl={9} lg={8} md={7} xs={12} >
          <h5 className="mt-3"><GoPerson />  Your Meeting</h5>
          <ListMeeting Meetings={listMeeting.own} onClickCard={(detail) => handleShow(detail)} />
          <h5 className="mt-3"><GoOrganization />  Invited Meeting</h5>
          <ListMeeting Meetings={listMeeting.invited} onClickCard={(detail) => handleShow(detail)} />
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton className="text-center">
              <Modal.Title>{currentDetailMeeting.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="ml-3">
              {/* <h3 className="text-center"></h3> */}
              <p><h6 className="d-inline">Location: </h6>Room {currentDetailMeeting.room}</p>
              <p><h6 className="d-inline">Time: </h6>From {currentDetailMeeting.from} to {currentDetailMeeting.to}</p>
              <p><h6 className="d-inline">Requirement: </h6>{currentDetailMeeting.requirement}</p>
              <p><h6 className="d-inline">Description: </h6>{currentDetailMeeting.description}</p>
              <ul className="list-group">
                {currentDetailMeeting.isOwn ? (<p><h6 className="d-inline">Members: </h6> {currentDetailMeeting.members.length}</p>) : null}
                {currentDetailMeeting.isOwn && currentDetailMeeting.members && currentDetailMeeting.members.map((member, index) => (
                  <li key={index} className="list-group-item">{member.name}     <span class="badge badge-light  "><FaTimes onClick={() => handleRemoveMember(member.id)} /></span></li>
                  // <span class="badge badge-primary">{member.name}    <span class="badge badge-light"><FaTimes onClick={() => handleRemoveMember(member.id)} /></span></span>
                ))}
                {currentDetailMeeting.isOwn ?
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
                <ReactSelect />
              </ul>
            </Modal.Body>
            <Modal.Footer>
              {currentDetailMeeting.isOwn ? <Button variant="secondary" onClick={() => handleRemoveMeeting(currentDetailMeeting.id)}>Delete meeting</Button> : null}
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
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

