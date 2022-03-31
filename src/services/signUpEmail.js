import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseApp} from "../constants/firebase.config";

const signUpEmail = async (email, password) => {
  const auth = getAuth(firebaseApp);
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    err.message && alert(err.message);
  }
}

export default signUpEmail;