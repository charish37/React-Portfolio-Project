// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a4297.firebaseapp.com",
  projectId: "real-estate-a4297",
  storageBucket: "real-estate-a4297.firebasestorage.app",
  messagingSenderId: "202721874180",
  appId: "1:202721874180:web:68c14d0b8893704f638051"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);