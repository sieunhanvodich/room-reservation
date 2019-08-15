import { createStore } from 'redux'
import allReducers from './reducers'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger();

const store = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware
    // loggerMiddleware
  )
)

export default store
