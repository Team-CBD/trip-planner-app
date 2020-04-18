import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import eventReducer from './eventReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    trip: tripReducer,
    event: eventReducer,
    error: errorReducer,
    auth: authReducer
});