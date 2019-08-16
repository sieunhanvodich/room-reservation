import { SAVE_USER, LOGIN_SUCCESS } from '../actions/ActionTypes'

const token = localStorage.getItem('token')
const initialState = token ? { isLogin: true} : {isLogin: false}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
        return{
          ...state,
          user: action.user
        }
    case LOGIN_SUCCESS:
        return{
          ...state,
          isLogin: action.isLogin
        }
    default:
      return state // state does not change
  }
}

export default userReducer
