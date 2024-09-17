import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightsData: [],
  loading: false,
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlightData: (state, action) => {
      state.flightsData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setFlightData, setLoading } = flightsSlice.actions;

export default flightsSlice.reducer;
