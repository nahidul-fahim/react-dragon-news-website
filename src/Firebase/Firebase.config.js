// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAFJ_pAXpCYWieTwfDFYHNiXHv7q_NIoQ",
  authDomain: "react-dragon-news-website.firebaseapp.com",
  projectId: "react-dragon-news-website",
  storageBucket: "react-dragon-news-website.appspot.com",
  messagingSenderId: "637785920026",
  appId: "1:637785920026:web:2df5e1fb07a0e5ec2077a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;