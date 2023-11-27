import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-DAaw15lr3hWTEApi_LofeQ4bZmzQ0rw",
  authDomain: "discuss-hub-ec6b5.firebaseapp.com",
  projectId: "discuss-hub-ec6b5",
  storageBucket: "discuss-hub-ec6b5.appspot.com",
  messagingSenderId: "796705501569",
  appId: "1:796705501569:web:c2dbf4b543b408bab2b880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;