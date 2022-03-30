import { getDatabase, ref, set } from "firebase/database";

function setUserData(userID, fullName) {
 const db = getDatabase()

  return set(ref(db, `users/${userID}`), {
    fullName,
    boards: [{ 'fistLog': 'secondLog' }]
  });
}

export default setUserData;