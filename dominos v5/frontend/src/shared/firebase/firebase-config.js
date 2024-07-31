// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpoYZ3c8TBAZwBkX3i70CsdFTxO93LljA",
  authDomain: "pizzaauth-9e220.firebaseapp.com",
  projectId: "pizzaauth-9e220",
  storageBucket: "pizzaauth-9e220.appspot.com",
  messagingSenderId: "1055201624816",
  appId: "1:1055201624816:web:f45161e3c5fa5acd173835",
  measurementId: "G-BXT69TMSRN"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);