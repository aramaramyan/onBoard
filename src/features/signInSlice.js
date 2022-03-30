import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  userID: null
}

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setUserID(state, action) {
      state.userID = action.payload;
      state.email = "";
      state.password = "";
    }
  }
});

export const { setEmail, setPassword, setUserID } = signInSlice.actions;
export default signInSlice.reducer;