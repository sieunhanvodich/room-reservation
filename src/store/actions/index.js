import { SAVE_USER, LOGIN_SUCCESS  } from './ActionTypes'

export const saveUserInfo = (user) => {
  return {
    type: SAVE_USER,
    user
  }
}

export const loginSuccess = (isLogin) => {
  return {
    type: LOGIN_SUCCESS,
    isLogin
  }
}
