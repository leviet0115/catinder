import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyD2bcorII46QAmyUBByOeOGSWd6PgIatVI",
  authDomain: "lv-catinder.firebaseapp.com",
  databaseURL:
    "https://lv-catinder-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lv-catinder",
  storageBucket: "lv-catinder.appspot.com",
  messagingSenderId: "571620227432",
  appId: "1:571620227432:web:f05227cc5fc422d12afedd",
});

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);
