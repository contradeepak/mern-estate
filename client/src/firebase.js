// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-965e4.firebaseapp.com",
  projectId: "mern-estate-965e4",
  storageBucket: "mern-estate-965e4.appspot.com",
  messagingSenderId: "774720337557",
  appId: "1:774720337557:web:7a29780b541caccf6a4d9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);