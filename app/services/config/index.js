// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVBCtwlQ_3sYLcZdbvBp_LU93ZaPhFDZg",
  authDomain: "batch6-reactnative.firebaseapp.com",
  projectId: "batch6-reactnative",
  storageBucket: "batch6-reactnative.appspot.com",
  messagingSenderId: "44094681885",
  appId: "1:44094681885:web:fc2e55d921fbaecfd867f4",
  measurementId: "G-JD0CDG9WD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);