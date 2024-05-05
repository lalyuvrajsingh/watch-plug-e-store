import firebase from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD_SMM_P6Nvoeli8UYnYHkShE9BjSxYIpY",
  authDomain: "watchplug-1db4f.firebaseapp.com",
  projectId: "watchplug-1db4f",
  storageBucket: "watchplug-1db4f.appspot.com",
  messagingSenderId: "641152549029",
  appId: "1:641152549029:web:b415ebe7a7b3e6b9718d4c",
  measurementId: "G-XBF2C4KSVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
