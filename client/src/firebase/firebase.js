// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkdM7qzI-c3KJN1TuJKoyJsg4_T2PqKQQ",
  authDomain: "journey-story-3f626.firebaseapp.com",
  projectId: "journey-story-3f626",
  storageBucket: "journey-story-3f626.firebasestorage.app",
  messagingSenderId: "630792904382",
  appId: "1:630792904382:web:7800608ae15745df45c8ef",
  measurementId: "G-82D8L3ENFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
