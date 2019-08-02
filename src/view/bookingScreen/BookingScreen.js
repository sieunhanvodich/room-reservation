import React, { Component } from 'react';
import { Form, Image, Container, Col, Button, ButtonToolbar } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../components/modal/Modal';
import AutoComplete from '../../components/autoComplete/AutoComplete';
import './BookingScreen.css';
import DatePicker from "react-datepicker";
import logo1 from '../../resources/images/gai-xinh-1.jpg';
import logo2 from '../../resources/images/gai-xinh-2.jpg';
import logo3 from '../../resources/images/gai-xinh-3.jpg';
import logo4 from '../../resources/images/gai-xinh-4.jpg';
import logo5 from '../../resources/images/gai-xinh-5.jpg';
import plus from '../../resources/images/icon-plus.jpg';
// import AutoComplete from '../../components/autoComplete/AutoComplete';
class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      modalShow: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //Set modal show
  setModalShow() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  //Handle change date event
  handleChange(date) {
    this.setState({
      date: date
    });
  }


  render() {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <Form className="form">
          <h3 className="text-center">Booking a Meeting</h3>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="meetingName">
              <Form.Label>Meeting Name</Form.Label>
              <Form.Control type="text" placeholder="Meeting Name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Day</Form.Label>
              <DatePicker className="datePicker"
                dateFormat="dd/MM/yyyy"
                selected={this.state.date}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="time" controlId="time">
              <Form.Label>Time</Form.Label>
              <DatePicker
                className="datePicker"
                selected={this.state.date}
                onChange={this.handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Duration</Form.Label>
              <Form.Control as="select">
                <option>0:30</option>
                <option>1:30</option>
                <option defaultValue>2:00</option>
                <option>2:30</option>
                <option>3:00</option>
              </Form.Control>
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
              {/* <Form.Control type="text" placeholder="Host" /> */}
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
              {/* <Form.Control type="text" placeholder="Project" /> */}
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
              {/* <Form.Label>Frequency</Form.Label> */}
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
                <Image src={plus} className="avatar" id="avatar-6" roundedCircle onClick={()=>this.setModalShow()}/>
                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={() => this.setModalShow()}
                />
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {/* <Form.Group as={Col}>
              <Form.Label>Invited</Form.Label>
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
            </Form.Group> */}
            <Form.Group as={Col} className="d-flex justify-content-end align-items-center">
              <ButtonToolbar>
                <Button variant="outline-secondary" className="cancel">Cancel</Button>
                <Button variant="outline-primary" className="submit">Book</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default BookingScreen;
