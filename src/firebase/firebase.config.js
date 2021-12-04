import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_czKRnQtpLMwmZ3wMPLOjoohg2JyO9io",
  authDomain: "pexels-api-75fee.firebaseapp.com",
  projectId: "pexels-api-75fee",
  storageBucket: "pexels-api-75fee.appspot.com",
  messagingSenderId: "486229337645",
  appId: "1:486229337645:web:977599e3106b18c6b0faa4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
