import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signInSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    user: userReducer
  }
});