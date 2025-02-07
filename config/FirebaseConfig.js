// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "reactnative-c5a30.firebaseapp.com",
  projectId: "reactnative-c5a30",
  storageBucket: "reactnative-c5a30.firebasestorage.app",
  messagingSenderId: "332082493267",
  appId: "1:332082493267:web:efa494379fd4085959d3a6",
  measurementId: "G-DV42XXT99P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
