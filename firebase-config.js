import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDlKouGeTQ7_NNgIRCLSYl66zB-J-9TzHs",
  authDomain: "drive-4745f.firebaseapp.com",
  databaseURL: "https://drive-4745f-default-rtdb.firebaseio.com",
  projectId: "drive-4745f",
  storageBucket: "drive-4745f.firebasestorage.app",
  messagingSenderId: "762959482484",
  appId: "1:762959482484:web:f40e2cb51020a61195cb21",
  measurementId: "G-V5PZCVKTCJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
