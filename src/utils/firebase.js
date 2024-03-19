// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkmKf7ggzW4VuuOzeoj9pBzu1qhzE6H0M",
  authDomain: "netflix-b6d68.firebaseapp.com",
  projectId: "netflix-b6d68",
  storageBucket: "netflix-b6d68.appspot.com",
  messagingSenderId: "559643514860",
  appId: "1:559643514860:web:ddfcdd0801e380db5592c9",
  measurementId: "G-PSQZV00J6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();