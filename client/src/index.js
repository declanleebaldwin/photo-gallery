import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./config"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = FIREBASE_CONFIG;
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
