import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {userActions} from '../../store/actions/Authentication'
import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

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

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state
    if (username && password) {
      this.props.login(username, password)
    }
  }



  // onSubmit = (e) => {
  //   e.preventDefault();

  //   const form = {
  //     username: this.state.username,
  //     password: this.state.password
  //   }

  //   axios({
  //     method: 'post',
  //     url: 'http://10.1.45.111:3000/login',
  //     data: form
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);

  //     });
  // }

  render() {
    // const { loggingIn } = this.props;
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
                  <input type="text" className="form-control" onChange={e => this.handleChange(e)} name='username' value={username} placeholder="Username" />
                </div>
                {submitted && !username &&
                  <div className="input-group form-group help-block">Username is required</div>
                }
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" onChange={e => this.handleChange(e)} name='password' value={password} placeholder="Password" />
                </div>
                {submitted && !password &&
                  <div className="input-group form-group help-block">Password is required</div>
                }
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
					</div>
                <div className="form-group">
                  <Button variant="outline-primary" className="submit login_btn float-right" onClick={this.handleSubmit}>Login</Button>
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

// function mapState(state) {
//   // const { loggingIn } = state.authentication;
//   // return { loggingIn };
// }

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  abc: userActions.abc
};

const connectedLogin = connect(null, actionCreators)(Login);
// export {connectedLogin as Login};
// export default Login;
export {connectedLogin as Login};
