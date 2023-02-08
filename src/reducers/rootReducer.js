import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  auth: authReducer,
  global: globalReducer,
});

export default rootReducer;
