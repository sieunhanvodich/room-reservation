import { SAVE_USER } from '../actions/ActionTypes'
let stateDefault = [1, 2]
const userReducer = (state = stateDefault, action) => {
  console.log('action', action)
  switch (action.type) {
    case SAVE_USER:
      return action.user
    default:
      return state // state does not change
  }
}

export default userReducer
