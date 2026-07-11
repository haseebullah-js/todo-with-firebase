import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4uu4tiTjSsa6Jhf4ciyOmJgjTI1EG9r0",
  authDomain: "todo-app-28294.firebaseapp.com",
  projectId: "todo-app-28294",
  storageBucket: "todo-app-28294.firebasestorage.app",
  messagingSenderId: "175488226522",
  appId: "1:175488226522:web:41451b76c46ca8edff01e3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;