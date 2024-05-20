// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxFJODF6B6KMExY_Skagr8RgUnBMdUlsQ",
  authDomain: "netflix-gpt-1e82c.firebaseapp.com",
  projectId: "netflix-gpt-1e82c",
  storageBucket: "netflix-gpt-1e82c.appspot.com",
  messagingSenderId: "644818305855",
  appId: "1:644818305855:web:9be3005d77f2d77061498a",
  measurementId: "G-CS2JWC3L5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
