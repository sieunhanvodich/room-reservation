import { SAVE_USER } from '../actions/ActionTypes'
import { SAVE_INVITED_USERS } from '../actions/ActionTypes'

let stateDefault = [1, 2]
const userReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user
      }
    case SAVE_INVITED_USERS:
      return {
        ...state,
        invitedUsers: action.invitedUsers
      }
    default:
      return state // state does not change
  }
}

export default userReducer
