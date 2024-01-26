// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChmQvltv-_76N6kTOtTB3HrlraidCNn8",
  authDomain: "netflixgpt-4601e.firebaseapp.com",
  projectId: "netflixgpt-4601e",
  storageBucket: "netflixgpt-4601e.appspot.com",
  messagingSenderId: "212747777820",
  appId: "1:212747777820:web:40b1d0c99c8b22164e2cd9",
  measurementId: "G-YLQKL7V9Y3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();