import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDXZqMZ6MlZwg5FExUom3UTm46y0GUDb94",
  authDomain: "react-portfolio-11.firebaseapp.com",
  projectId: "react-portfolio-11",
  storageBucket: "react-portfolio-11.appspot.com",
  messagingSenderId: "568208326677",
  appId: "1:568208326677:web:263f63d2888ee356d60e1c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
