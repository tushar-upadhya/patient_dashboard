import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DateRange } from '@/types';
import { addMonths } from 'date-fns';

const initialState: DateRange = {
  from: addMonths(new Date(), -3), // Default to last 3 months
  to: new Date(),
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
    resetDateRange: (state) => {
      state.from = addMonths(new Date(), -3);
      state.to = new Date();
    },
  },
});

export const { setDateRange, resetDateRange } = dateRangeSlice.actions;

export default dateRangeSlice.reducer;