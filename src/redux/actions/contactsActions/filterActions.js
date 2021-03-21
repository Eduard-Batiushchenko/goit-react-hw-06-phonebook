import { HANDLE_FILTER } from '../../../constants/constants';
import { createAction } from '@reduxjs/toolkit';

// const handleFilterValue = value => ({
//   type: HANDLE_FILTER,
//   payload: value,
// });
const handleFilterValue = createAction(HANDLE_FILTER);

export { handleFilterValue };
