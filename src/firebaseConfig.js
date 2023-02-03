import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBTL5kQeH4qtfvDvOWNPDzYStkAayliswU",
  authDomain: "registration-ae56f.firebaseapp.com",
  projectId: "registration-ae56f",
  storageBucket: "registration-ae56f.appspot.com",
  messagingSenderId: "195337524718",
  appId: "1:195337524718:web:a1e0a66ce974b1211deaff",
  measurementId: "G-BYCMYHCTR6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);