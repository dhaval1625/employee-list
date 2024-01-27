import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_LIST } from '../config';

export const employeeSlice = createSlice({
   name: 'employee',
   initialState: {
      list: DUMMY_LIST,
   },
   reducers: {
      addMember(state, {payload}) {
         state.list.unshift(payload);
      }
   },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;

export const store = configureStore({
   reducer: {employee: employeeSlice.reducer},
});

