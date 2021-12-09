// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6o8BOXKjxgHH5cDt82MKTS_6e0-aK9ww",
  authDomain: "coderhouse-ph.firebaseapp.com",
  projectId: "coderhouse-ph",
  storageBucket: "coderhouse-ph.appspot.com",
  messagingSenderId: "747051918732",
  appId: "1:747051918732:web:0002cc1d270c89a21422a9",
  measurementId: "G-1NQSJE7GBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dataBase = app.firestore();