import React, { Component } from 'react';
import { Container,Button, Row, Col } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container justify-content-center align-self-center d-flex h-100">
        <div className="d-flex ">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" />

                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
					</div>
                <div className="form-group">
                  <Button variant="outline-primary" className="submit login_btn float-right">Login</Button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
