import { HANDLE_FILTER } from '../../../constants/constants';
import { createReducer } from '@reduxjs/toolkit';
const initialState = '';

// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case HANDLE_FILTER:
//       return (state = payload);
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer(initialState, {
  [HANDLE_FILTER]: (state, { payload }) => (state = payload),
});

export default filterReducer;
