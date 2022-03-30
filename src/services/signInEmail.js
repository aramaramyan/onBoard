import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebaseApp} from "../constants/firebase.config";

const signInEmail = async ({ email, password }) => {
  const auth = getAuth(firebaseApp);
  return await signInWithEmailAndPassword(auth, email, password)
}

export default signInEmail;