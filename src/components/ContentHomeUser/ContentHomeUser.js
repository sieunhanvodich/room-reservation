import React from 'react';
import { connect } from 'react-redux';
import { GoPerson, GoOrganization } from 'react-icons/go';
import './contentHomeUser.css'
import DatePicker from '../datePicker/DatePicker'
import { Row, Container, Col } from 'react-bootstrap';
import ModalDetail from '../modal/Modal';
import axios from 'axios';
import Meeting from '../Meeting/Meeting';

class ContentHomeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ownMeetingInTimeSelected: [],
        intitedMeetingInTimeSelected: []
      },
      show: false,
      currentDetailMeeting: {}
    };
    this.onClickCard = this.onClickCard.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddMember = this.handleAddMember.bind(this);
    this.handleRemoveMember = this.handleRemoveMember.bind(this);
    this.handleRemoveMeeting = this.handleRemoveMeeting.bind(this);
  };

  componentDidMount() {
    axios.get('http://localhost:3000/home1')
      .then(res => this.setState({ data: res.data }));
  };

  onClickCard(meeting) {
    this.setState({
      show: true,
      currentDetailMeeting: meeting
    }, console.log(this.state.currentDetailMeeting))
  };

  handleClose() {
    this.setState({ show: false });
  };

  handleAddMember(userId) {

  };

  handleRemoveMember(memberId) {
    axios.get()
  };

  handleRemoveMeeting(meetingId) {

  }

  render() {
    let ownMeetingInTimeSelected = this.state.data.ownMeetingInTimeSelected.map(meeting =>
      <Meeting 
        key={meeting._id} 
        onClickShowDetail={() => {
          meeting.isOwn = true;
          this.onClickCard(meeting);
        }} 
        content={meeting} />
    );

    let intitedMeetingInTimeSelected = this.state.data.intitedMeetingInTimeSelected.map(meeting =>
      <Meeting key={meeting._id} onClickShowDetail={() => this.onClickCard(meeting)} content={meeting} />
    );

    return (
      <Container>
        <Row>
          <Col xl={4} lg={4} md={7} sm={12} xs={12}>
            <DatePicker />
          </Col>
          <Col xl={8} lg={8} md={5} xs={12} sm={12}>
            <h5 className="mt-3"><GoPerson />  Your Meeting</h5>
            <div className="d-flex flex-wrap">
                {ownMeetingInTimeSelected}
            </div>
            <h5 className="mt-3"><GoOrganization />  Invited Meeting</h5>
            <div className="d-flex flex-wrap">
                {intitedMeetingInTimeSelected}
            </div>

            {this.state.show ? <ModalDetail 
                show={this.state.show} 
                handleAddMember={this.handleAddMember} 
                handleRemoveMember={this.handleRemoveMember}
                currentDetailMeeting={this.state.currentDetailMeeting}
                handleClose={this.handleClose}
              /> : null}
          </Col>
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.home.show,
    currentDetailMeeting: state.home.currentDetailMeeting,
    listMeeting: state.home.listMeeting
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initState: (initState) => dispatch({ type: 'INIT_HOME', state: initState }),
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

