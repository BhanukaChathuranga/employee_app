import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';

import { employeeApi, employeeSlice } from '../feature/employees';

const store = () =>
  configureStore({
    reducer: {
      [employeeApi.reducerPath]: employeeApi.reducer,

      [employeeSlice.name]: employeeSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(employeeApi.middleware),
  });
// setupListeners(store.dispatch);

export const wrapper = createWrapper(store);
