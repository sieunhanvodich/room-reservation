import React, { Component } from 'react';
import { Form, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import AutoComplete from '../../components/autoComplete/AutoComplete';
// import logo1 from '../../resources/images/gai-xinh-1.jpg';

class MyVerticallyCenteredModal extends Component {

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Invite
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Row>
            
         </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <AutoComplete></AutoComplete>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                {/* <Button variant="outline-secondary" onClick={this.props.onHide}>Close</Button> */}
                <Button variant="outline-primary">Add</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form.Row>

        </Modal.Body>
        <Modal.Footer>
          {/* <ButtonToolbar>
            <Button variant="outline-secondary" onClick={this.props.onHide}>Close</Button>
            <Button variant="outline-primary" onClick={this.props.onHide}>Add</Button>
          </ButtonToolbar> */}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
