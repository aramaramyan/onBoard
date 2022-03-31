import { getFirestore, collection, addDoc } from "firebase/firestore";
import {firebaseApp} from "../constants/firebase.config";

const setUserData = async (userID, fullName) => {
  const db = getFirestore(firebaseApp);
  try {
    return await addDoc(collection(db, "users"), {
      fullName,
      userID,
      boards: []
    })
  } catch (err) {
    alert(err.message);
  }
}

export default setUserData;