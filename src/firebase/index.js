import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "technews-66891.firebaseapp.com",
  projectId: "technews-66891",
  storageBucket: "technews-66891.appspot.com",
  messagingSenderId: "1053301537248",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-S1P91SN203",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
