    
import { combineReducers } from 'redux'
import user from './UserReducer'
import home from './HomeReducer';

const allReducers = combineReducers({
  user,
  home
})

export default allReducers;
