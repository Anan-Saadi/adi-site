// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzu9J9kTEp6uwYBU2Uc8jShVZ8E7POpoY",
  authDomain: "adi-sadi.firebaseapp.com",
  projectId: "adi-sadi",
  storageBucket: "adi-sadi.appspot.com",
  messagingSenderId: "720779845407",
  appId: "1:720779845407:web:5de5ea17c09fc984665a2a",
  measurementId: "G-8WTXFYY0XS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export async function getAllPosts() {
  const ref = firestore.collection('posts').limit(5);
  const result =  (await ref.get());
  let response: firebase.firestore.DocumentData[] = [];

  result.forEach(doc => {
    response.push(doc.data());
  });
  return response

}


