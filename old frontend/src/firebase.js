import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkZkl705MRWt6RYIXAWaKZdToL7iYPjik",
  authDomain: "career-tech-guru.firebaseapp.com",
  projectId: "career-tech-guru",
  storageBucket: "career-tech-guru.firebasestorage.app",
  messagingSenderId: "380855400532",
  appId: "1:380855400532:web:50baf7b78f1783465815c1",
  measurementId: "G-MGC398NV81"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});
export const storage = getStorage(app);
