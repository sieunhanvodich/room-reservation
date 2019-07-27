import { SAVE_USER } from '../actions/ActionTypes'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        user: {
          ...state.user,
          ...action.user,
        }
      }
    default:
      return state // state does not change
  }
}

export default userReducer
