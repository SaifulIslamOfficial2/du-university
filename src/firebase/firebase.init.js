// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcP1nQ9svJbn2rHHkEa8jEksYCL-hRF5E",
  authDomain: "du-university.firebaseapp.com",
  projectId: "du-university",
  storageBucket: "du-university.firebasestorage.app",
  messagingSenderId: "968242201595",
  appId: "1:968242201595:web:132fc998577ff11837015e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);