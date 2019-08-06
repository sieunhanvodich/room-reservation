import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const form = {
      username: this.state.username,
      password: this.state.password
    }

    axios({
      method: 'post',
      url: 'http://10.1.45.111:3000/login',
      data: form
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        
      });
  }

  render() {
    return (
      <div className="container justify-content-center align-self-center d-flex h-100">
        <div className="d-flex ">
          <div className="card card-login">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" onChange={e => this.handleChange(e)} name='username' placeholder="Username" />

                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" onChange={e => this.handleChange(e)} name='password' placeholder="Password" />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
					</div>
                <div className="form-group">
                  <Button variant="outline-primary" className="submit login_btn float-right" onClick={(e) => this.onSubmit(e)}>Login</Button>
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
