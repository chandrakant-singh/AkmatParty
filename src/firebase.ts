// src/app/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKRd9t6Rpx86rzG_Wbpc--Qtv2vumoIzQ",
  authDomain: "akmatparty-5145e.firebaseapp.com",
  projectId: "akmatparty-5145e",
  storageBucket: "akmatparty-5145e.appspot.com",
  messagingSenderId: "1042820539780",
  appId: "1:1042820539780:web:d957c7101884d93523e9d1",
  measurementId: "G-JFDG0EWQ5L"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const realtimeDb = getDatabase(app);
