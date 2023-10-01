import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './silces/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});
