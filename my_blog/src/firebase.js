

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "photography-b257a.firebaseapp.com",
    projectId: "photography-b257a",
    storageBucket: "photography-b257a.appspot.com",
    messagingSenderId: "24904058753",
    appId: "1:24904058753:web:84a5dadea7054a3ce08a80",
    measurementId: "G-3XJ61G6WXW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);





// dont forget to export app













// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: "mern-blog-e781e.firebaseapp.com",
//     projectId: "mern-blog-e781e",
//     storageBucket: "mern-blog-e781e.appspot.com",
//     messagingSenderId: "431095275910",
//     appId: "1:431095275910:web:8aae5db5525a1b2d7e8c07"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);




