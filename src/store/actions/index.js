import { SAVE_INVITED_USERS, SAVE_USER, LOGIN_SUCCESS  } from './ActionTypes'

export const saveUserInfo = (user) => {
  return {
    type: SAVE_USER,
    user
  }
}

export const saveInvitedUser = (invitedUsers) => {
  return {
    type: SAVE_INVITED_USERS,
    invitedUsers
  }
}

export const loginSuccess = (isLogin) => {
  return {
    type: LOGIN_SUCCESS,
    isLogin
  }
}
