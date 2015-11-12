import { combineReducers } from 'redux';
import appReducer from './appReducer';

let rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
