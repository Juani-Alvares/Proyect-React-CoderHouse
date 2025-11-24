import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALk4_6e5DHqkMgrg5M0zz5wh168gRfbUU",
  authDomain: "project-react-e56cb.firebaseapp.com",
  projectId: "project-react-e56cb",
  storageBucket: "project-react-e56cb.firebasestorage.app",
  messagingSenderId: "476863809994",
  appId: "1:476863809994:web:d5e9c026c472689d69e733"
};


const app = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApps()[0];

export const db = getFirestore(app);
