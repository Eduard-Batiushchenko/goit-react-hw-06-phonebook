import { combineReducers } from 'redux';
import contacts from './contactsReducer/index';

const rootReducer = combineReducers({
  contacts,
});

export default rootReducer;
