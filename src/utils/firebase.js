// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm82ZjHTecDH-rssoQyQByecm2erhII8E",
  authDomain: "netflixgpt-2a2a4.firebaseapp.com",
  projectId: "netflixgpt-2a2a4",
  storageBucket: "netflixgpt-2a2a4.appspot.com",
  messagingSenderId: "307293483737",
  appId: "1:307293483737:web:b00803b44de81e6ac104c8",
  measurementId: "G-K00KTZ3DNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);