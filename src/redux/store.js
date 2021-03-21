// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: rootReducer,
});

export default store;
