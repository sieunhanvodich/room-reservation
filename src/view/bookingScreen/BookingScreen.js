import React, { Component } from 'react';
import { Form, Image, Container, Col, Button, ButtonToolbar } from 'react-bootstrap';
// import {ValidatedInput} from 'react-bootstrap-validation';
import MyVerticallyCenteredModal from '../../components/modal/Modal';
import Message from '../../components/message/Message';
import AutoComplete from '../../components/autoComplete/AutoComplete';
import './BookingScreen.css';
import DatePicker from "react-datepicker";
import RcQueueAnim from 'rc-queue-anim';
import logo1 from '../../resources/images/gai-xinh-1.jpg';
import logo2 from '../../resources/images/gai-xinh-2.jpg';
import logo3 from '../../resources/images/gai-xinh-3.jpg';
import logo4 from '../../resources/images/gai-xinh-4.jpg';
import logo5 from '../../resources/images/gai-xinh-5.jpg';
import plus from '../../resources/images/icon-plus.jpg';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now()),
      until: new Date(Date.now()),
      start: new Date(Date.now()),
      end: new Date(Date.now() + 3600000),
      modalShow: false,
      messageShow: false
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.roundingTime(this.state.start)
    this.roundingTime(this.state.end)
  }

  //Set rounding hours for start, end time
  setRoundingStartEnd(start, end) {
    this.setState({
      start: start,
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
    if (true) {
      this.setState({
        messageShow: !this.state.messageShow
      })
    }
  }

  //Handle change date event
  handleChangeDate(date) {
    this.setState({
      date: date
    });
  }

  //Handle change date event
  handleChangeStart(start) {
    this.setState({
      start: start
    });
  }

  //Handle change date event
  handleChangeEnd(end) {
    this.setState({
      end: end
    });
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
                <Form.Control type="text" placeholder="Meeting Name" />
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
                    selected={this.state.start}
                    onChange={this.handleChangeStart}
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
                <Form.Control as="select">
                  <option>IOT</option>
                  <option>AWS</option>
                  <option>Azure</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="host">
                <Form.Label>Host</Form.Label>
                <AutoComplete placeholder="Host" data></AutoComplete>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select">
                  <option>D1</option>
                  <option>D2</option>
                  <option>D3</option>
                  <option>D4</option>
                  <option>D5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="project">
                <Form.Label>Project</Form.Label>
                <AutoComplete placeholder="Project" data></AutoComplete>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripton</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Description" />
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
                  name="schedule"
                  id="oneDay"
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Daily"
                  name="schedule"
                  id="daily"
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Weekly"
                  name="schedule"
                  id="weekly"
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Monthly"
                  name="schedule"
                  id="monthly"
                />
                <DatePicker className="datepicker-booking"
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.date}
                  onChange={this.handleChangeDate}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="host">
                <Form.Label>Invited</Form.Label>
                <div>
                  <Image src={logo1} className="avatar" id="avatar-1" roundedCircle />
                  <Image src={logo2} className="avatar" id="avatar-2" roundedCircle />
                  <Image src={logo3} className="avatar" id="avatar-3" roundedCircle />
                  <Image src={logo4} className="avatar" id="avatar-4" roundedCircle />
                  <Image src={logo5} className="avatar" id="avatar-5" roundedCircle />
                  <Image src={plus} className="avatar" id="avatar-6" roundedCircle onClick={() => this.setModalShow()} />
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
                  <Button variant="outline-primary" onClick={() => this.setMessageShow()} className="submit" >Book</Button>
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

export default BookingScreen;
