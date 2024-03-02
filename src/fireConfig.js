// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPBJdT8LSZvnOCjGkmN0eeRZL_KTk0R6E",
  authDomain: "chat-app-c59a6.firebaseapp.com",
  projectId: "chat-app-c59a6",
  storageBucket: "chat-app-c59a6.appspot.com",
  messagingSenderId: "300460222883",
  appId: "1:300460222883:web:645f590718ab2d31261216",
  measurementId: "G-PXS2NL2GK0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() //authentication
export const storage = getStorage() //file storage
export const db = getFirestore() //database