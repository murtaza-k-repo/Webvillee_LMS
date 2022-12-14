import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvnvO-EjP3jkDrcwmS-5djsxvS0X9X9_s",
  authDomain: "wvlms1.firebaseapp.com",
  projectId: "wvlms1",
  storageBucket: "wvlms1.appspot.com",
  messagingSenderId: "744695333327",
  appId: "1:744695333327:web:0ec5f9d48bd0d0785492ba",
  measurementId: "G-GWKKY4YXEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
