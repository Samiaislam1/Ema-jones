// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-mArSPfRvOmd43KPu_bLdJPl2CYk1mdQ",
  authDomain: "ema-jones.firebaseapp.com",
  projectId: "ema-jones",
  storageBucket: "ema-jones.appspot.com",
  messagingSenderId: "906948890536",
  appId: "1:906948890536:web:e7bd0486f269c7eb5ed79d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;