import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signInSlice";
import signUpReducer from "../features/signUpSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
  }
})