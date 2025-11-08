import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrRcHGw8glHNjDE70aCefnM4Y4_wIBWmM",
  authDomain: "webagency-pro-73a1b.firebaseapp.com",
  projectId: "webagency-pro-73a1b",
  storageBucket: "webagency-pro-73a1b.firebasestorage.app",
  messagingSenderId: "579548677859",
  appId: "1:579548677859:web:e0f4d8baba67ac0c9f27d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;