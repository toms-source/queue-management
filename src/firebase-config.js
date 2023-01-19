import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'; 
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCJxiY1LwKChl3_kPSerEaA9kWwVkUROCk",
  authDomain: "que-system-8bc43.firebaseapp.com",
  projectId: "que-system-8bc43",
  storageBucket: "que-system-8bc43.appspot.com",
  messagingSenderId: "374625312424",
  appId: "1:374625312424:web:ece3ae1ed22533d78bac9d",
  measurementId: "G-5XREQ7X01R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)