import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signInSlice";
import signUpReducer from "../features/signUpSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    user: userReducer
  }
});