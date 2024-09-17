import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/FlightSlice";

const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});

export default store;
