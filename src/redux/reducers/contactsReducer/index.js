import { combineReducers } from 'redux';
import items from './itemsReducer';
import filter from './filterReducer';

const contacts = combineReducers({
  items,
  filter,
});

export default contacts;
