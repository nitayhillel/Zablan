import { createSlice } from '@reduxjs/toolkit'




const userLocationSlice = createSlice({
    name: 'userLocation',
    initialState: { latitude: null, longitude: null },
    reducers: {
      updateLocation: (state, action) => {
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
      }
    },
  })
  

  export const updateLocation = (latitude, longitude) => ({
    type: 'userLocation/updateLocation',
    payload: { "latitude":latitude, "longitude":longitude }
  });
  export default userLocationSlice.reducer