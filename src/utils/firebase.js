// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-HGrz_Uz1H_7rWxoslhsykrfVu_EJjK0",
  authDomain: "todo-app-86894.firebaseapp.com",
  projectId: "todo-app-86894",
  storageBucket: "todo-app-86894.appspot.com",
  messagingSenderId: "934324210101",
  appId: "1:934324210101:web:98d2eb536d16753bb571fc",
  measurementId: "G-6PQBS1RVPB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth(app);

export default db;