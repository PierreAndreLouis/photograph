// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-e781e.firebaseapp.com",
    projectId: "mern-blog-e781e",
    storageBucket: "mern-blog-e781e.appspot.com",
    messagingSenderId: "431095275910",
    appId: "1:431095275910:web:8aae5db5525a1b2d7e8c07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
