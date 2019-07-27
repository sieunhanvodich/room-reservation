    
import { combineReducers } from 'redux'
import user from './UserReducer'

const allReducers = combineReducers({
  user
})

export default allReducers