import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";

let initialState = {
  docID: null,
  fullName: "Aram Aramyan",
  email: "aram@mail.ru",
  userID: null,
  boards: {},
}

const db = getFirestore(firebaseApp);

export async function getUserData(userID) {
  const querySnapshot = await getDocs(collection(db, `users`));
  let user;
  querySnapshot.forEach((doc) => {
    if(doc.data().userID === userID) {
    user = doc.data();
    }
  });
  return user;
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setState (state, action) {
      state = action.payload;
    },
    addBoard(state, action) {
      state.boards[action.payload.id] = action.payload;
    },
    handleFavorite(state, action) {
      state.boards[action.payload] = {
        ...state.boards[action.payload],
        isFavorite: !state.boards[action.payload].isFavorite
      }
    },
    changeBoardTitle(state, action) {
      state.boards[action.payload.id] = {
        ...state.boards[action.payload.id],
        title: action.payload.title
      }
    },
    changeBoardDesc(state, action) {
      state.boards[action.payload.id] = {
        ...state.boards[action.payload.id],
        description: action.payload.description
      }
    },
    deleteBoard(state, action) {
      delete state.boards[action.payload];
    },
    addList(state, action) {
      state.boards[action.payload.boardID].lists[action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        cards: {}
      }

    },
    changeListTitle(state, action) {
      state.boards[action.payload.boardID].lists[action.payload.id].title = action.payload.title;
    },
    deleteList(state, action) {
      delete state.boards[action.payload.boardID].lists[action.payload.id];
    },
    addCard(state, action) {
      state.boards[action.payload.boardID].lists[action.payload.listID].cards[action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        description: "",
        comments: {},
        priority: "LOW",
        date: Date.now()
      }
    }
  },
})

export const {
  setState,
  addBoard,
  handleFavorite,
  changeBoardTitle,
  changeBoardDesc,
  deleteBoard,
  addList,
  changeListTitle,
  deleteList,
  addCard
} = userSlice.actions;
export default userSlice.reducer;