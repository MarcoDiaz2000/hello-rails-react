import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk("greeting/fetchGreeting", async () => {
  const response = await axios.get("http://localhost:3000/api/random_greeting");
  return response.data;
});

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { greeting: "", status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
