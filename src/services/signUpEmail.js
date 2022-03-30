import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseApp} from "../constants/firebase.config";



const signUpEmail = async (email, password) => {
  const auth = getAuth(firebaseApp);

  return await createUserWithEmailAndPassword(auth, email, password);
}

export default signUpEmail;