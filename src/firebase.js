import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu2k4A0KWw5tqM8sZAXFuvxg3rShhFY98",
  authDomain: "chat-application-35ac9.firebaseapp.com",
  projectId: "chat-application-35ac9",
  storageBucket: "chat-application-35ac9.appspot.com",
  messagingSenderId: "251322784321",
  appId: "1:251322784321:web:da691eae1c7b649b0444c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
