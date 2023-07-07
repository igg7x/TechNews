// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "technews-66891.firebaseapp.com",
  projectId: "technews-66891",
  storageBucket: "technews-66891.appspot.com",
  messagingSenderId: "1053301537248",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-S1P91SN203",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
