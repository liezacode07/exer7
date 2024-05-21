// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyDm1SpjOomUVCjqK9n5f7Cry2_bukfiDzQ",
  authDomain: "exer7-999a0.firebaseapp.com",
  projectId: "exer7-999a0",
  storageBucket: "exer7-999a0.appspot.com",
  messagingSenderId: "762008367395",
  appId: "1:762008367395:web:5603c4cef9e59733f29c96"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
