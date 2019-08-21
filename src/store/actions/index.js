import { SAVE_USER } from './ActionTypes'
import { SAVE_INVITED_USERS } from './ActionTypes'

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
