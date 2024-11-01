// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtttB1yd11KZ7-NrUATx717f5H1hfCsw0",
  authDomain: "mern-book-store-ab95d.firebaseapp.com",
  projectId: "mern-book-store-ab95d",
  storageBucket: "mern-book-store-ab95d.appspot.com",
  messagingSenderId: "668719281715",
  appId: "1:668719281715:web:c5c293da888a23fe811546",
  measurementId: "G-VBLL3Z77QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;