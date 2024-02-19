// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloghub-1f5e1.firebaseapp.com",
  projectId: "bloghub-1f5e1",
  storageBucket: "bloghub-1f5e1.appspot.com",
  messagingSenderId: "905814713989",
  appId: "1:905814713989:web:a1f2f38d592c4a2832abec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
