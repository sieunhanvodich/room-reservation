import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Login.css'
import UserService from '../../services/UserService';
import { loginSuccess, saveUserInfo } from '../../store/actions'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit() {
    this.setState({ submitted: true });
    const { username, password } = this.state
    if (username && password) {
      const response = await UserService.login(username, password)
      response.user ? this.props.saveUserInfo(response.user) && this.props.loginSuccess(true) && this.props.history.push('/home-user') : alert(response)
    }
  }

  render() {
    const { username, password, submitted } = this.state;
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
                  <input type="text" className="form-control" onChange={this.handleChange} name='username' value={username} placeholder="Username" />
                </div>
                {submitted && !username &&
                  <div className="input-group form-group help-block">Username is required</div>
                }
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" onChange={this.handleChange} name='password' value={password} placeholder="Password" />
                </div>
                {submitted && !password &&
                  <div className="input-group form-group help-block">Password is required</div>
                }
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
					</div>
                <div className="form-group">
                  <Button variant="outline-primary" className="submit login_btn float-right" onClick={() => {
                    this.handleSubmit()
                  }}>Login</Button>
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

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
  saveUserInfo,
  loginSuccess
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

