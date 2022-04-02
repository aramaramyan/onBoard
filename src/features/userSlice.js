import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";
import getStorage from "../helpers/getStorage";

const initialState = {
  docID: null,
  fullName: "",
  email: "",
  userID: null,
  boards: [],
}

const db = getFirestore(firebaseApp);

export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async (payload, {rejectWithValue,  dispatch}) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if(doc.data().userID === getStorage()) {
        const state = { docID: doc.id, ...doc.data() };
        console.log(state);
        dispatch(setState(state));
      }
    });
  }
);

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setState (state, action) {
      state = action.payload;
    },
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    handleFavorite(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload) {
          return {
            ...board,
            isFavorite: !board.isFavorite
          }
        }
        return board
      })
    },
    changeTitle(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.id) {
          return {
            ...board,
            title: action.payload.title
          }
        }
        return board;
      });
    },
    changeDesc(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.id) {
          return {
            ...board,
            description: action.payload.description
          }
        }
        return board;
      });
    },
  },
  extraReducers: {
    [getUserData.fulfilled]: () => console.log("fulfilled"),
    [getUserData.pending]: () => console.log("pending"),
    [getUserData.rejected]: () => console.log("rejected")
  }
})

export const {
  setState,
  addBoard,
  handleFavorite,
  changeTitle,
  changeDesc
} = userSlice.actions;
export default userSlice.reducer;