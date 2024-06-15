// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGV3SxfHzbO3XFwf-ELdLScZEFEXybUGY",
  authDomain: "store-tutorial-653d0.firebaseapp.com",
  projectId: "store-tutorial-653d0",
  storageBucket: "store-tutorial-653d0.appspot.com",
  messagingSenderId: "203409617256",
  appId: "1:203409617256:web:0b6ca5543959320f4226dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);