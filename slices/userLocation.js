import { createSlice } from '@reduxjs/toolkit'




const userLocationSlice = createSlice({
    name: 'userLocation',
    initialState: { latitude: null, longitude: null },
    reducers: {
      updateLocation: (state, action) => {
        state.lat = action.payload.latitude;
        state.lng = action.payload.longitude;
      }
    },
  })
  

  export const updateLocation = (latitude, longitude) => ({
    type: 'updateLocation',
    payload: { latitude, longitude }
  });
  export default userLocationSlice.reducer