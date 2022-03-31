import { getDatabase, ref, set } from "firebase/database";

function setUserData(userID, fullName) {
 const db = getDatabase();

  return set(ref(db, `users/${userID}`), {
    fullName,
    boards: [
      {
        id: 1,
        title: "JS",
        description: "PicsArt",
        bgColor: "rgba( 234, 0, 0, 0.35 )",
        isStarred: false
      },
    ],
  });
}

export default setUserData;