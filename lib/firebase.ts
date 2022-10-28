// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
var kebabCase = require("kebab-case");

import 'firebase/compat/storage';


import { getAnalytics } from "firebase/analytics";
import { useCallback } from "react";

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
export const storage = firebase.storage().ref();

export async function uploadPost(title:string , text:string){

    firestore.collection('posts').doc(kebabCase(title)).set(
      {
        title: title,
        text: text
      }
    )
}
export async function getAllPosts() {
  const ref = firestore.collection('posts').limit(5);
  const result =  (await ref.get());

  let response: firebase.firestore.DocumentData[] = [];
  console.log(response);

  result.forEach(doc => {
    response.push(doc.data());
  });
  return response

}


