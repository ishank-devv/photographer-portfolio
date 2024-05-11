// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb5btJhfv2mo0rZ_x4niV8ZyeEh7jLgxI",
  authDomain: "ishank-suri.firebaseapp.com",
  projectId: "ishank-suri",
  storageBucket: "ishank-suri.appspot.com",
  messagingSenderId: "739726663067",
  appId: "1:739726663067:web:173278889753668b91953e",
  measurementId: "G-WTV3TV7S8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//for Signup/ sign In
export const auth = getAuth();
