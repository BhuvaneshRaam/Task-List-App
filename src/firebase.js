import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD3g_XShocEXYrnR9VIH5OPWVOctOCMRR8",
  authDomain: "to-do-list-new-2d12d.firebaseapp.com",
  databaseURL: "https://to-do-list-new-2d12d-default-rtdb.firebaseio.com",
  projectId: "to-do-list-new-2d12d",
  storageBucket: "to-do-list-new-2d12d.appspot.com",
  messagingSenderId: "187723265901",
  appId: "1:187723265901:web:e1027f92f5951d8549cc64",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
