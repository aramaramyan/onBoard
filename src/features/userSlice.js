import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";

let initialState = {
  fullName: "",
  email: "",
  userID: null,
  boards: [],
  currentList: null,
  currentCard: null,
}

const db = getFirestore(firebaseApp);

export async function getUserData(userID) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let user;
  querySnapshot.forEach((doc) => {
    if(doc.data().userID === userID) {
    user = {docID: doc.id, ...doc.data()};
    }
  });
  return user;
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setState (state, action) {
      return {
        ...action.payload
      }
    },

    addBoard(state, action) {
      state.boards = [...state.boards, action.payload];
    },

    handleFavorite(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload) {
          return {
            ...board,
            isFavorite: !board.isFavorite
          };
        }
        return board;
      })
    },

    changeBoardTitle(state, action) {
      console.log("changeBoardTitle", action.payload);
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.id) {
          return {
            ...board,
            title: action.payload.title
          };
        }
        return board;
      });
    },

    changeBoardDesc(state, action) {
      state.boards[action.payload.id] = {
        ...state.boards[action.payload.id],
        description: action.payload.description
      }
    },

    deleteBoard(state, action) {
      state.boards = state.boards.filter(board => board.id !== action.payload);
    },

    addList(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: [...board.lists, action.payload]
          }
        }
        return board;
      });
    },

    changeListTitle(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.id) {
                return {
                  ...list,
                  title: action.payload.title
                };
              }
              return list;
            })
          };
        }
        return board;
      });
      },

    deleteList(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.filter(list => list.id !== action.payload.id)
          };
        }
        return board;
      });
    },

    addCard(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return {
                  ...list,
                  cards: [...list.cards, {
                    boardID: action.payload.boardID,
                    listID: action.payload.listID,
                    id: action.payload.id,
                    title: action.payload.title,
                    description: "",
                    comments: [],
                    date: Date.now()
                  }]
                };
              }
              return list;
            })
          };
        }
        return board;
      });
    },

    deleteCard(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return  {
                  ...list,
                  cards: list.cards.filter(card => card.id !== action.payload.cardID)
                }
              }
              return list;
            })
          }
        }
        return board;
      });
    },

    setCardDescription(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return  {
                  ...list,
                  cards: list.cards.map(card => {
                    if(card.id === action.payload.cardID) {
                      return {
                        ...card,
                        description: action.payload.description
                      }
                    }
                    return card;
                  })
                }
              }
              return list;
            })
          }
        }
        return board;
      });
    },

    addComment(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return  {
                  ...list,
                  cards: list.cards.map(card => {
                    if(card.id === action.payload.cardID) {
                      return {
                        ...card,
                        comments: [...card.comments, action.payload]
                      }
                    }
                    return card;
                  })
                }
              }
              return list;
            })
          }
        }
        return board;
      });
    },

    changeComment(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return  {
                  ...list,
                  cards: list.cards.map(card => {
                    if(card.id === action.payload.cardID) {
                      return {
                        ...card,
                        comments: card.comments.map(comment => {
                          if(comment.id === action.payload.commentID) {
                            return {
                              ...comment,
                              text: action.payload.text
                            };
                          }
                          return comment;
                        })
                      }
                    }
                    return card;
                  })
                }
              }
              return list;
            })
          }
        }
        return board;
      });
    },

    deleteComment(state, action) {
      state.boards = state.boards.map(board => {
        if(board.id === action.payload.boardID) {
          return {
            ...board,
            lists: board.lists.map(list => {
              if(list.id === action.payload.listID) {
                return  {
                  ...list,
                  cards: list.cards.map(card => {
                    if(card.id === action.payload.cardID) {
                      return {
                        ...card,
                        comments: card.comments.filter(comment => comment.id !== action.payload.commentID)
                      }
                    }
                    return card;
                  })
                }
              }
              return list;
            })
          }
        }
        return board;
      });
    },

    dragStart_Card(state, action) {
      state.currentList = action.payload.list;
      state.currentCard = action.payload.card;
    },

    drop_Card(state, action) {
      // const currentIndex = state.currentList.cards.indexOf(state.currentCard);
      // state.currentList.cards = state.currentList.cards.splice(currentIndex, 1);
      // const dropIndex = action.payload.list.cards.indexOf(action.payload.card);
      // action.payload.list.cards.splice(dropIndex + 1, 0, state.currentCard);
      //
      // state.boards = state.boards.map(board => {
      //   if(board.id === action.payload.boardID) {
      //     return {
      //       ...board,
      //       lists: board.lists.map(list => {
      //         if(list.id === action.payload.list.id) {
      //           return action.payload.list;
      //         }
      //         if(list.id === state.currentList.id) {
      //           return state.currentList;
      //         }
      //       })
      //     }
      //   }
      //   return board;
      // });
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
  addCard,
  deleteCard,
  setCardDescription,
  addComment,
  changeComment,
  deleteComment,
  dragStart_Card,
  drop_Card,
} = userSlice.actions;
export default userSlice.reducer;