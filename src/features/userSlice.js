import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";
import getStorage from "../helpers/getStorage";

const initialState = {
  docID: null,
  fullName: "",
  email: "",
  userID: null,
  boars: [],
  favBoards: []
}

const db = getFirestore(firebaseApp);

export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async (payload, {rejectWithValue,  dispatch}) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if(doc.data().userID === getStorage()) {
        dispatch(setState({docID: doc.id, ...doc.data()}));
        console.log({docID: doc.id, ...doc.data()})
      }
    });
  }
);

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setState(state, action) {
      state = action.payload;
    },
    addBoard(state, action) {

    },
  },
  extraReducers: {
    [getUserData.fulfilled]: () => console.log("fulfilled"),
    [getUserData.pending]: () => console.log("pending"),
    [getUserData.rejected]: () => console.log("rejected")
  }
})

export const { setState } = userSlice.actions;
export default userSlice.reducer;