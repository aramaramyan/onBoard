import {getDoc, getFirestore, doc, setDoc, collection, getDocs} from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";
import getStorage from "../helpers/getStorage";
import {v4} from "uuid";

const db = getFirestore(firebaseApp);
const docRef = doc(db, "users", getStorage());


export default function useFirestore() {

  const addUserData = async (userID, fullName, email) => {
    try {
      return await setDoc(doc(db, "users", userID), {
        fullName,
        email,
        userID,
        boards: []
      })
    } catch (err) {
      alert(err.message);
    }
  };

  const getUserBoards = async () => {
     let data;
    await getDoc(docRef).then(res => {
      data = res.data();
    })
    return  data.boards;
  }

  const addBoardFirestore = async (data) => {
    try {
      return await setDoc(doc(db, "users", getStorage(), "boards", data.id), {
        ...data
      })
    } catch (err) {
      alert(err.message);
    }
  };


  const updateBoards = async(data) => {
    const userRef = doc(db, "user", "boards");
    return setDoc(userRef, {
      ...data
    })
  }

  const updateBoard = async(boardName, data) => {
    const userRef = doc(db, "user", boardName);
    return setDoc(userRef, {
      boards: {
        ...data
      }
    })
  }

  return {
    addUserData,
    updateBoards,
    updateBoard,
    addBoardFirestore,
    getUserBoards
  };
}