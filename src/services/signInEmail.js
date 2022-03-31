import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebaseApp} from "../constants/firebase.config";

const auth = getAuth(firebaseApp);

const signInEmail = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export default signInEmail;