import { auth, database, initializeApp } from "firebase/";

const config = {
 
};

initializeApp(config);

export const ref = database().ref();
export const firebaseAuth = auth;

export const loginAuth = (email, password) => {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
};
