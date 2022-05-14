// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBive5u-NNSw5Yb6VKW-hECOoFdJ_xpWVE",
  authDomain: "fir-62674.firebaseapp.com",
  databaseURL: "https://fir-62674-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-62674",
  storageBucket: "fir-62674.appspot.com",
  messagingSenderId: "886654796161",
  appId: "1:886654796161:web:2ff97b263ee58af6122880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

