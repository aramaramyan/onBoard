import { createSlice } from "@reduxjs/toolkit";
import setStorage from "../helpers/setStorage";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  userID: null
}

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setFullName(state, action) {
      state.fullName = action.payload
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setUserID(state, action) {
      setStorage(action.payload);
      state.userID = action.payload;
      state.fullName = "";
      state.email = "";
      state.password = ""
    }
  }
});

export const { setFullName, setEmail, setPassword, setUserID } = signUpSlice.actions;
export default signUpSlice.reducer;