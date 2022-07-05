// v9 compat packages are API compatible with v8 code

// Import the functions you need from the SDKs you needimport firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/database";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCsNqhbARnPZvu67y2KcIAyF6NPJ03jMMM",
  authDomain: "directory-2-93a90.firebaseapp.com",
  projectId: "directory-2-93a90",
  storageBucket: "directory-2-93a90.appspot.com",
  messagingSenderId: "535479941503",
  appId: "1:535479941503:web:5f4023405b5fa4d603024a",
  measurementId: "G-YT7C7E3LRP"
  
};

// Initialize Firebase

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
 