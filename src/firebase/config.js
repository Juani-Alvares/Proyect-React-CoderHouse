import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTHDOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGEBUCKET",
  messagingSenderId: "TU_SENDERID",
  appId: "TU_APPID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
