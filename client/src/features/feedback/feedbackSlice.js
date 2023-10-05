import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeedbackData } from "../../services/getFeedback";

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    value: [],
    status: "idle", 
    error: null, 
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFeedbackDataThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFeedbackDataThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(getFeedbackDataThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getFeedbackDataThunk = createAsyncThunk(
  "getFeedbackData",
  async () => {
    const feedbackData = await getFeedbackData();
    return feedbackData;
  }
);

export default feedbackSlice.reducer;
