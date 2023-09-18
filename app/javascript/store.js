import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./slices/greetingSlice";

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
