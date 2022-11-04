import { legacy_createStore as createStore, combineReducers } from 'redux';

import { default as questionReducer } from './reducer';

const reducers = combineReducers({
  question: questionReducer
})

export default createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(),
)