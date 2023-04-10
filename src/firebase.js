// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4sYdL7oIQS0z6exvmLZpdgy6kQtbl9Q",
  authDomain: "todo-app-demo-7dd4a.firebaseapp.com",
  projectId: "todo-app-demo-7dd4a",
  storageBucket: "todo-app-demo-7dd4a.appspot.com",
  messagingSenderId: "289363739030",
  appId: "1:289363739030:web:0307a6f5c785ba3ebf1db7",
  measurementId: "G-KTHM0TLHVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);