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

class ContentHomeUser extends React.Component {
  render() {
    let input;
    return (
      <Container>
        <Row>
          <Col xl={4} lg={4} md={7} sm={12} xs={12}>
            <DatePicker />
          </Col>
          <Col xl={8} lg={8} md={5} xs={12} sm={12}>
            <h5 className="mt-3"><GoPerson />  Your Meeting</h5>
            <ListMeeting Meetings={this.props.listMeeting.own} onClickCard={(detail) => this.props.handleShow(detail)} />
            <h5 className="mt-3"><GoOrganization />  Invited Meeting</h5>
            <ListMeeting Meetings={this.props.listMeeting.invited} onClickCard={(detail) => this.props.handleShow(detail)} />
            <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
              <Modal.Header closeButton className="text-center">
                <Modal.Title>{this.props.currentDetailMeeting.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="ml-3">
                <p>Location: Room {this.props.currentDetailMeeting.room}</p>
                <p>Time: From {this.props.currentDetailMeeting.from} to {this.props.currentDetailMeeting.to}</p>
                <p>Requirement: {this.props.currentDetailMeeting.requirement}</p>
                <p>Description: {this.props.currentDetailMeeting.description}</p>
                <ul className="list-group">
                  {this.props.currentDetailMeeting.isOwn ? (<p>Members: {this.props.currentDetailMeeting.members.length}</p>) : null}
                  {this.props.currentDetailMeeting.isOwn && this.props.currentDetailMeeting.members && this.props.currentDetailMeeting.members.map((member, index) => (
                    <li key={index} className="list-group-item">{member.name}<span className="badge badge-light  "><FaTimes onClick={() => this.props.handleRemoveMember(member.id)} /></span></li>
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
                  <ReactSelect />
                </ul>
              </Modal.Body>
              <Modal.Footer>
                {this.props.currentDetailMeeting.isOwn ? <Button variant="secondary" onClick={() => this.props.handleRemoveMeeting(this.props.currentDetailMeeting.id)}>Delete meeting</Button> : null}
                <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
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

