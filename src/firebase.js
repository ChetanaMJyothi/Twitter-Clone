// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgpO56OvoHNztihys1q0QWdRFw6Mls-1k",
  authDomain: "twitter-clone-e2633.firebaseapp.com",
  projectId: "twitter-clone-e2633",
  storageBucket: "twitter-clone-e2633.appspot.com",
  messagingSenderId: "212159708875",
  appId: "1:212159708875:web:4ad3ee277e6b0c9d10654e",
  measurementId: "G-L4KPN8WEH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth= getAuth(app);
export {auth, db};

