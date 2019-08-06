import React, { Component } from 'react';
import { Form, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import AutoComplete from '../../components/multiSelect/MultiSelect';

class MyVerticallyCenteredModal extends Component {

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
              <AutoComplete></AutoComplete>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button variant="outline-primary">Add</Button>
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
