// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4enzf3mb6yoaY1jC_k2qusFcVjB0naMM",
    authDomain: "dragon-news-f1703.firebaseapp.com",
    projectId: "dragon-news-f1703",
    storageBucket: "dragon-news-f1703.appspot.com",
    messagingSenderId: "482672056473",
    appId: "1:482672056473:web:5bec39dd4243349412c008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;