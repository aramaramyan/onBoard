import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseApp} from "../constants/firebase.config";

const auth = getAuth(firebaseApp);

const signUpEmail = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    err.message && alert(err.message);
  }
}

export default signUpEmail;