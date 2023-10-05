import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./features/feedback/feedbackSlice";

export default configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
