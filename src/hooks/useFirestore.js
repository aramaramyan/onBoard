import {collection, getDoc, getFirestore, doc, setDoc, addDoc, updateDoc} from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";
import getStorage from "../helpers/getStorage";
import {v4} from "uuid";

const db = getFirestore(firebaseApp);


export default function useFirestore() {

  const addUserData = async (userID, fullName, email) => {
    try {
      return await setDoc(doc(db, "users", userID), {
        fullName,
        email,
        userID,
      })
    } catch (err) {
      alert(err.message);
    }
  };

  const getUserBoards = async () => {

    const docRef = doc(db, "users", getStorage());
    // const docSnap = await getDoc(docRef);

    getDoc(docRef).then(res => console.log(res.data()))
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