import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Image, Container, Col, Button, ButtonToolbar } from 'react-bootstrap';
// import {ValidatedInput} from 'react-bootstrap-validation';
import MyVerticallyCenteredModal from '../../components/modal/Modal';
import Message from '../../components/message/Message';
import AutoComplete from '../../components/autoComplete/AutoComplete';
import RoomService from '../../services/RoomSerVice';
import BookingService from '../../services/BookingService';
import './BookingScreen.css';
import DatePicker from "react-datepicker";
import RcQueueAnim from 'rc-queue-anim';
import plus from '../../resources/images/icon-plus.jpg';

const departmentFromServer = [
  {
    "_id": "5d490435df293ac6ec0b9970",
    "name": "D1",
    "updated_at": "...",
    "created_at": "8/6/2019"
  },
  {
    _id: "5d5b9f291882c7b21765f62e",
    "name": "D2",
    "updated_at": "...",
    "created_at": "8/6/2019"
  },
  {
    "_id": "5d5b9f2f1882c7b21765f633",
    "name": "D3",
    "updated_at": "...",
    "created_at": "8/6/2019"
  },
]

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now()),
      until: new Date(Date.now()),
      // start: new Date(Date.now()),
      end: new Date(Date.now() + 3600000),
      modalShow: false,
      messageShow: false,
      rooms: '',
      departments: departmentFromServer,
      room_selected: 'AWS',
      department_selected: 'D1',
      meetingName: '',
      host: '',
      project: '',
      descripton: '',
      bookType: 'one',
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeUntil = this.handleChangeUntil.bind(this);
    // this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.roundingTime(this.state.date)
    this.roundingTime(this.state.end)
  }

  //Set rounding hours for start, end time
  setRoundingStartEnd(date, end) {
    this.setState({
      date: date,
      end: end
    })
  }

  //Rounding hours
  roundingTime(dt) {
    if (dt.getMinutes() < 30) {
      dt.setMinutes(30)
    }
    else if (dt.getMinutes() > 30) {
      dt.setHours(dt.getHours() + 1)
      dt.setMinutes(0)
    }
    return dt
  }

  //Set modal show
  setModalShow() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  //Handle show message when click book button 
  setMessageShow() {
    this.setState({
      messageShow: !this.state.messageShow
    })
  }

  sendBookInfotoServer() {
    try {
      if(this.props.invitedUsers){
        const bookInfo = {
          meeting_name: this.state.meetingName,
          project_name: this.state.project,
          room_selected: this.state.room_selected,
          department_selected: this.state.department_selected,
          from: this.state.date,
          to: this.state.end,
          host_id: this.props.userInfo._id,
          bookType: this.state.bookType,
          description: this.state.descripton,
          invited: this.props.invitedUsers.map(invitedUser => invitedUser._id),
          until: this.state.until,
        }
        console.log(bookInfo)
        // BookingService.booking(bookInfo)
        this.setMessageShow()
      }else{
        alert("You have not chosen anyone!")
      }
    } catch(err){ 
      alert(err)
    }
  }

  //Handle onClick radio event
  onClick = nr => async () => {
    await this.setState({
      bookType: nr
    });
  }

  //Handle change event
  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value
    })
  }

  //Handle change date event
  async handleChangeDate(date) {
    await this.setState({
      date: date,
    });
  }

  //Handle change until event
  async handleChangeUntil(until) {
    await this.setState({
      until: until
    });
  }

  //Handle change date event
  // handleChangeStart(start) {
  //   this.setState({
  //     start: start
  //   });
  // }

  //Handle change date event
  handleChangeEnd(end) {
    this.setState({
      end: end
    });
  }


  componentDidMount() {
    RoomService.rooms().then(rooms =>
      this.setState({ rooms: rooms }))
  }

  createRoomOptions = () =>
    this.state.rooms.length
      ? this.state.rooms.map(room => (
        <option key={room._id} value={room.name}>
          {room.name}
        </option>
      ))
      : ""

  createDepartmentOptions = () =>
    this.state.departments.length
      ? this.state.departments.map(department => (
        <option key={department._id} value={department.name}>
          {department.name}
        </option>
      ))
      : ""

  createAvatarList = () => {
    return (this.props.invitedUsers ? this.props.invitedUsers.map((invitedUser, index) =>
      <Image key={invitedUser._id} src={"https://i.pinimg.com/564x/" + invitedUser.avatarUrl} className="avatar" id={`avatar-${index + 1}`} roundedCircle />
    )
      : "") || <Image src={plus} className="avatar" id="avatar-1" roundedCircle onClick={() => this.setModalShow()} />
  }




  render() {
    return (
      <RcQueueAnim delay={200}>
        <Container key="1" className="d-flex justify-content-center align-items-center">
          <Form className="form">
            <h3 className="text-center">Booking a Meeting</h3>
            <br />
            <Form.Row>
              <Form.Group key="2" as={Col} controlId="meetingName">
                <Form.Label>Meeting Name</Form.Label>
                <Form.Control type="text" placeholder="Meeting Name" name='meetingName'
                  value={this.state.meetingName}
                  onChange={e => this.handleChange(e)} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Day</Form.Label>
                <div className="datepicker-wrapper">
                  <DatePicker className="datepicker-booking"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} className="start-time" controlId="start-time">
                <Form.Label>Start</Form.Label>
                <div className="datepicker-wrapper">
                  <DatePicker
                    className="datepicker-booking"
                    selected={this.state.date}
                    onChange={this.handleChangeDate}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} className="end-time" controlId="end-time">
                <Form.Label>End</Form.Label>
                <div className="datepicker-wrapper">
                  <DatePicker
                    className="datepicker-booking"
                    selected={this.state.end}
                    onChange={this.handleChangeEnd}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                <Form.Label>Meeting Room</Form.Label>
                <Form.Control as="select" name="room_selected"
                  ref={ref => {
                    this._select = ref
                  }} onChange={this.handleChange} value={this.state.room_selected}>
                  {this.createRoomOptions()}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="host">
                <Form.Label>Host</Form.Label>
                <Form.Control type="text" placeholder="Host" name='host'
                  readOnly
                  value={this.props.userInfo.name}
                  onChange={e => this.handleChange(e)} />
                {/* <AutoComplete placeholder="Host" data></AutoComplete> */}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" name="department_selected"
                  ref={ref => {
                    this._select = ref
                  }} onChange={this.handleChange} value={this.state.department_selected}>
                  {this.createDepartmentOptions()}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="project">
                <Form.Label>Project</Form.Label>
                <Form.Control type="text" placeholder="Project" name='project'
                  value={this.state.project}
                  onChange={e => this.handleChange(e)} />
                {/* <AutoComplete placeholder="Project" data></AutoComplete> */}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripton</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Description"
                  name="descripton"
                  value={this.state.descripton}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row >
              <Form.Group as={Col} >
                <Form.Check
                  defaultChecked
                  custom
                  inline
                  type="radio"
                  label="One Day"
                  name="bookType"
                  id="oneDay"
                  onChange={this.onClick("one")}
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Daily"
                  name="bookType"
                  id="daily"
                  onChange={this.onClick("daily")}
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Weekly"
                  name="bookType"
                  id="weekly"
                  onChange={this.onClick("weekly")}
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Monthly"
                  name="bookType"
                  id="monthly"
                  onChange={this.onClick("monthly")}
                />
                <DatePicker className="datepicker-booking"
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.until}
                  onChange={this.handleChangeUntil}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="host">
                <Form.Label>Invited</Form.Label>
                <div>
                  {this.createAvatarList()}
                  {/* <Image src={plus} className="avatar" id={`avatar-${this.state.avatarPlusId}`} roundedCircle onClick={() => this.setModalShow()} /> */}
                  <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow()}
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} className="d-flex justify-content-end align-items-center">
                <ButtonToolbar>
                  <Button variant="outline-secondary" className="cancel">Cancel</Button>
                  <Button variant="outline-primary" onClick={() => this.sendBookInfotoServer()} className="submit" >Book</Button>
                  <Message
                    show={this.state.messageShow}
                    onHide={() => this.setMessageShow()}
                  />
                </ButtonToolbar>
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </RcQueueAnim>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    invitedUsers: state.user.invitedUsers,
    userInfo: state.user.user || { name: "Bùi Quang Linh" }
  }
};

const mapDispatchToProps = {
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingScreen);
