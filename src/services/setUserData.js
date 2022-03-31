import { getFirestore, collection, addDoc } from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";

const db = getFirestore(firebaseApp);

const setUserData = async (userID, fullName) => {
  try {
    return await addDoc(collection(db, "users"), {
      fullName,
      userID,
      boards: [],
      favBoards: []
    })
  } catch (err) {
    alert(err.message);
  }
}

export default setUserData;