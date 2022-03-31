import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  userID: null,
  boars: [],
  favBoards: []
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setState(state, action) {
      state = action.payload;
    }
  }
})

export const { setState } = userSlice.actions;
export default userSlice.reducer;