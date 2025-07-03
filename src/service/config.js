import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-UNH-Al9kzk7v0LFOFMx5wOAFkRV8W5Q",
  authDomain: "ecomerce2-7f18c.firebaseapp.com",
  projectId: "ecomerce2-7f18c",
  storageBucket: "ecomerce2-7f18c.firebasestorage.app",
  messagingSenderId: "673439374261",
  appId: "1:673439374261:web:928914e65449f02c9b17fc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)