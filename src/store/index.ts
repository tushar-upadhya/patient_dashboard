import { configureStore } from '@reduxjs/toolkit';
import dateRangeReducer from './slices/dateRangeSlice';
import hospitalDataReducer from './slices/hospitalDataSlice';

export const store = configureStore({
  reducer: {
    dateRange: dateRangeReducer,
    hospitalData: hospitalDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['dateRange/setDateRange'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.from', 'payload.to'],
        // Ignore these paths in the state
        ignoredPaths: ['dateRange.from', 'dateRange.to'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;