// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvC7IHclmZZE0AhGVZlUHPyJY7ny4_ATI",
  authDomain: "listed-inc-43538.firebaseapp.com",
  projectId: "listed-inc-43538",
  storageBucket: "listed-inc-43538.appspot.com",
  messagingSenderId: "906677427480",
  appId: "1:906677427480:web:f02d87f708b23c3dc3926d",
  measurementId: "G-SHJW0VPBJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
