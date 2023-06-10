// weekdaySlice.js

import { createSlice } from '@reduxjs/toolkit';

const weekdays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

const initialState = {
  weekday: weekdays[(new Date().getDay() + 1)%7],
};

const weekdaySlice = createSlice({
  name: 'weekday',
  initialState,
  reducers: {
    setWeekday: (state, action) => {
      state.weekday = action.payload;
    },
  },
});

export const { setWeekday } = weekdaySlice.actions;

export default weekdaySlice.reducer;
