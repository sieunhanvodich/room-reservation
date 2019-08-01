import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from '../datePicker/DatePicker';
import ListMeeting from '../ListMeeting/ListMeeting';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import './contentHomeUser.css'
import "react-datepicker/dist/react-datepicker.css";

// class ContentHomeUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleShow() {
//     this.setState({ show: true });
//   };

//   handleClose() {
//     this.setState({ show: false });
//   };

//   render() {
//     let listUpcomming = [1, 2, 3];
//     let listOwnMeeting = [1, 2, 3];
//     let listInvitedMeeting = [1, 2, 3, 4];
//     return (
//       <div className="contentHomeUser">
//         <DatePicker></DatePicker>
//         <div className="myInfo">
//           <h4 className="mt-3">Meeting upcomming</h4>
//           <ListMeeting Meetings={listUpcomming} onClickCard={this.handleShow} />

//           <h4 className="mt-3">Your Meeting</h4>
//           <ListMeeting Meetings={listOwnMeeting} onClickCard={this.handleShow} />

//           <h4 className="mt-3">Invited Meeting</h4>
//           <ListMeeting Meetings={listInvitedMeeting} onClickCard={this.handleShow} />
//           <Modal show={this.state.show} onHide={this.handleClose} size="lg">
//             <Modal.Header closeButton>
//               <Modal.Title>Detail</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>

//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={this.handleClose}>Close</Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//     );
//   }
// }

const ContentHomeUser = ({ listMeeting, show, handleShow, handleClose, currentDetailMeeting, handleAddMember, handleRemoveMember, handleRemoveMeeting }) => {
  let input;

  return (
    <div className="contentHomeUser">
      <DatePicker></DatePicker>
      <div className="myInfo">
        <h4 className="mt-3">Meeting upcomming</h4>
        <ListMeeting Meetings={listMeeting.upComming} onClickCard={(detail) => handleShow(detail)} />

        <h4 className="mt-3">Your Meeting</h4>
        <ListMeeting Meetings={listMeeting.own} onClickCard={(detail) => handleShow(detail)} />

        <h4 className="mt-3">Invited Meeting</h4>
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

