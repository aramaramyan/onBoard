import { collection, getDocs } from "firebase/firestore";
import { getFirestore} from "firebase/firestore";
import { firebaseApp } from "../constants/firebase.config";

const db = getFirestore(firebaseApp);

const getUsersDta = async (id) => {
  const data = [];

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  const [user] = data.filter(user => user.userID === id);
  return user;
}

export default getUsersDta;