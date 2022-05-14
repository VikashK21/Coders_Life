// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwi-emdMoYd0VR_TGaSut_WDvL73u_5xA",
  authDomain: "scrum-authentication-27647.firebaseapp.com",
  databaseURL: "https://scrum-authentication-27647.firebaseio.com",
  projectId: "scrum-authentication-27647",
  storageBucket: "scrum-authentication-27647.appspot.com",
  messagingSenderId: "624297251387",
  appId: "1:624297251387:web:120c3b30a0dbd1e729c21e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
