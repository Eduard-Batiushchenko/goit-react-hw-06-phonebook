import {
  ADD_ITEM,
  DELETE_ITEM,
  RELOAD_PAGE,
} from '../../../constants/constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

// const itemsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_ITEM:
//       return state.some(el => el.name === payload.name)
//         ? state
//         : (state = [...state, payload]);
//     case DELETE_ITEM:
//       return state.filter(el => el.id !== payload);
//     case RELOAD_PAGE:
//       return (state = payload);
//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer(initialState, {
  [ADD_ITEM]: (state, { payload }) =>
    state.some(el => el.name === payload.name)
      ? state
      : (state = [...state, payload]),
  [DELETE_ITEM]: (state, { payload }) => state.filter(el => el.id !== payload),
  [RELOAD_PAGE]: (state, { payload }) => (state = payload),
});

export default itemsReducer;
