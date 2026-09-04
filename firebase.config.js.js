// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "peninsular-big-band.firebaseapp.com",
  projectId: "peninsular-big-band",
  storageBucket: "peninsular-big-band.firebasestorage.app",
  messagingSenderId: "482750259949",
  appId: "1:482750259949:web:17f86e2011e704299a62e4",
  measurementId: "G-CB4QRZD8FR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);