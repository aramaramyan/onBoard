import { collection, getDocs } from "firebase/firestore";
import { getFirestore} from "firebase/firestore";
import { firebaseApp } from "../constants/firebase.config";

const db = getFirestore(firebaseApp);

const getUsersDta = async (id) => {
  const querySnapshot = await getDocs(collection(db, `users/${id}`));

  console.log('snapshot:::', querySnapshot)
}

export default getUsersDta;