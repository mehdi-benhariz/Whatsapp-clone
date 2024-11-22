// Import the functions you need from the SDKs you need
import app from "firebase/compat";
// import "firebase/compat/auth";
import "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "drive-node-302220.firebaseapp.com",
  databaseURL: "https://drive-node-302220-default-rtdb.firebaseio.com",
  projectId: "drive-node-302220",
  storageBucket: "drive-node-302220.firebasestorage.app",
  messagingSenderId: "132224791907",
  appId: "1:132224791907:web:e43b5ab602ca1b4bc28f56",
  measurementId: "G-CMYFL6HV1K"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;
