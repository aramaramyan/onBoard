import { getFirestore, collection, addDoc } from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";

const db = getFirestore(firebaseApp);

const setUserData = async (userID, fullName, email) => {
  try {
    return await addDoc(collection(db, "users"), {
      fullName,
      email,
      userID,
      boards: [],
      favBoards: []
    })
  } catch (err) {
    alert(err.message);
  }
}

export default setUserData;