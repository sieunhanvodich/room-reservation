import React, { Component } from 'react';
import { Form, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import AutoComplete from '../../components/multiSelect/MultiSelect';

class MyVerticallyCenteredModal extends Component {
  constructor(props) {
    super(props)
    this.state={
      isEmpty: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeEmptyStatus = this.changeEmptyStatus.bind(this)
  }

  changeEmptyStatus(){
    this.setState={
      isEmpty: false
    }.then(()=> console.log(111545))
  }

  sendMail() {
    console.log("Send mail Success!")
  }

  handleClick() {
    try {
      this.sendMail()
      if(this.state.isEmpty)throw new Error("You have not chosen anyone!")
      this.props.onHide()
    } catch (e) {
      alert(e.message);
    } finally {
      console.log('Done');
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Invite
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <AutoComplete changeStatus={this.changeEmptyStatus}></AutoComplete>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button variant="outline-primary" onClick={this.handleClick}>Add</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form.Row>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
