import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getEmployees } from './employee-api';
// import { getBooks } from 'src/services/EmployeeAPI';

const initialState = {
  employeesList: null,
  employeeDetails: null
};

export const employeeSlice = createSlice({
  name: 'employeelist',
  initialState,
  reducers: {
    getDetails(state, action) {
      state.employeeDetails = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state = action.payload.employeesList;
      return state;
    });

    builder.addMatcher(
      getEmployees.matchFulfilled,
      (state, action) => {
        state.employeesList = action.payload;
      },
    );
  },
});

export const selectEmployee = (state) => state.employeelist.employeeDetails;
export const { getDetails } = employeeSlice.actions;
