import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import {
  ADD_ITEM,
  DELETE_ITEM,
  RELOAD_PAGE,
} from '../../../constants/constants';

// const addItem = data => ({
//   type: ADD_ITEM,
//   payload: {
//     ...data,
//     id: shortid.generate(),
//   },
// });

// const deleteItem = id => ({
//   type: DELETE_ITEM,
//   payload: id,
// });

// const setByReload = value => ({
//   type: RELOAD_PAGE,
//   payload: value,
// });
const payloadAddItem = data => ({
  payload: {
    ...data,
    id: shortid.generate(),
  },
});
const addItem = createAction(ADD_ITEM, payloadAddItem);
const deleteItem = createAction(DELETE_ITEM);
const setByReload = createAction(RELOAD_PAGE);

export { addItem, deleteItem, setByReload };
