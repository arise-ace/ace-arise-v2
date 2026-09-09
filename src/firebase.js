import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ---------------------------------------------------------------
// REPLACE THIS with YOUR OWN Firebase project config.
// Get it from: Firebase Console -> Project Settings -> General
// -> "Your apps" -> Web app -> SDK setup and configuration
// ---------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDmPYXEPsV2Ui57kBaotZ7OZ11CakEASMM",
  authDomain: "ace-arise.firebaseapp.com",
  projectId: "ace-arise",
  storageBucket: "ace-arise.firebasestorage.app",
  messagingSenderId: "954052703698",
  appId: "1:954052703698:web:55f8fd016a8813e139440b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
