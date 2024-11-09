// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxV6QK-Vwnpc717X1EhNkPMR_4zCGAaDI",
  authDomain: "test-10398.firebaseapp.com",
  projectId: "test-10398",
  storageBucket: "test-10398.firebasestorage.app",
  messagingSenderId: "1022318738783",
  appId: "1:1022318738783:web:790c0fb412ee6f65160aea",
  measurementId: "G-7ZJK3VQB4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let auth = getAuth(app);

export default auth ;
