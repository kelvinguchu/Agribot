// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlYjAJzhtQXjbz9umNWbW_xmSmUjz31QI",
  authDomain: "agribot-2d7c2.firebaseapp.com",
  projectId: "agribot-2d7c2",
  storageBucket: "agribot-2d7c2.appspot.com",
  messagingSenderId: "25982490596",
  appId: "1:25982490596:web:44f0b5a21d06623ab159f1",
  measurementId: "G-PP10LGJ4F1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

