import React, { Component } from 'react';
import { Form, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import AutoComplete from '../../components/multiSelect/MultiSelect';

class MyVerticallyCenteredModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmpty: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeEmptyStatus = this.changeEmptyStatus.bind(this)
  }

  changeEmptyStatus(valueLength) {
    this.setState({
      isEmpty: (valueLength) ? false : true
    })
    console.log(this.state.isEmpty + " " + valueLength)
  }

  addGuest() {
    console.log("Add mail Success!")
  }

  handleClick() {
    try {
      this.addGuest()
      if (this.state.isEmpty) throw new Error("You have not chosen anyone!")
      else{
        this.setState({
          isEmpty: true
        })
      }
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
