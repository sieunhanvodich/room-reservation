import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Message.css';

class Message extends Component {

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        centered
      >
        <Modal.Body>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group>
              <h4>Message</h4>
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group>
              Bạn đã đặt phòng thành công!
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group>
              <Button variant="outline-primary btn-confirm" onClick={this.props.onHide}>OK</Button>
            </Form.Group>
          </Form.Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Message;
