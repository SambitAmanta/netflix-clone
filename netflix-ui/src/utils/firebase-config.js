import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyArd4EFck9yoTLiQudrDLJ0XlARz7fNT70",
  authDomain: "react-netflix-clone-b581b.firebaseapp.com",
  projectId: "react-netflix-clone-b581b",
  storageBucket: "react-netflix-clone-b581b.appspot.com",
  messagingSenderId: "1012812212781",
  appId: "1:1012812212781:web:bd60063ffab326020066a4",
  measurementId: "G-38PYM26R3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)