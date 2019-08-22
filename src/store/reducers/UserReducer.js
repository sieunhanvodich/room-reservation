import { SAVE_USER, LOGIN_SUCCESS, SAVE_INVITED_USERS } from '../actions/ActionTypes'

const token = localStorage.getItem('token')
const initialState = token ? { isLogin: true } : { isLogin: false }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin
      }
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
      return state;
  }
}

export default userReducer
