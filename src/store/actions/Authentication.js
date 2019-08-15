import { authenticationConstants } from '../constants'
import userService from '../../services/UserService'
import { createBrowserHistory } from 'history'

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    console.log('haha')
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          createBrowserHistory().push('/');
        },
        error => {
          dispatch(failure(error));
          // dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: authenticationConstants.LOGOUT };
}
