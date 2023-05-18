import { configureStore } from '@reduxjs/toolkit';
import reducer from './cakeReducer';

const store = configureStore({
    reducer: reducer
  });

export default store