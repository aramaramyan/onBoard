import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signInSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  }
})