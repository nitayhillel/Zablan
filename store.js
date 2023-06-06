import { configureStore } from '@reduxjs/toolkit'
import userLocationReducer from './slices/userLocation'
import weekdayReducer from './slices/weekdaySlice'

export const store = configureStore({
  reducer: {userLocation: userLocationReducer, weekday: weekdayReducer},
})