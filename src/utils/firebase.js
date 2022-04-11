// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCgzmFz4-hxEglw2MolSKYGyxZ_j506Lo",
  authDomain: "better-todo-app-c0ee9.firebaseapp.com",
  projectId: "better-todo-app-c0ee9",
  storageBucket: "better-todo-app-c0ee9.appspot.com",
  messagingSenderId: "684167891983",
  appId: "1:684167891983:web:420e3787f02d9557aae77a",
  measurementId: "G-Y80CBB2SD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;