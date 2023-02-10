import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import globalReducer from './globalReducer';
import basketReducer from './basketReducer';

const rootReducer = combineReducers({
    items: itemReducer,
    global: globalReducer,
    basket: basketReducer,
});

export default rootReducer;
