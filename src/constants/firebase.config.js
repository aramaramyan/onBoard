import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6wHhT5eUpyF-8aYORiVbWt9jeH3AS6_w",
  authDomain: "onboard-management.firebaseapp.com",
  databaseURL: "https://onboard-management-default-rtdb.firebaseio.com",
  projectId: "onboard-management",
  storageBucket: "onboard-management.appspot.com",
  messagingSenderId: "328151171331",
  appId: "1:328151171331:web:db9179d252755891e4e936"
};

export const firebaseApp = initializeApp(firebaseConfig);
