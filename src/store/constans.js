import { auth, database, initializeApp } from "firebase/";

const config = {
  apiKey: "AIzaSyBtCSXpcXM9WozBYe8xJo-kZxayvu8k4ro",
  authDomain: "milanuncios-d12aa.firebaseapp.com",
  databaseURL: "https://milanuncios-d12aa.firebaseio.com",
  projectId: "milanuncios-d12aa",
  storageBucket: "milanuncios-d12aa.appspot.com",
  messagingSenderId: "444456265944",
  appId: "1:444456265944:web:0e3b9672749c5d12eb4fad",
  measurementId: "G-7C0W659ZYZ"
};

initializeApp(config);

export const ref = database().ref();
export const firebaseAuth = auth;

export const loginAuth = (email, password) => {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
};
