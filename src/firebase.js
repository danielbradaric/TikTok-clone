// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUtqBw0oymt4UYbXxuYKnGCkNDUdUvRDQ",
    authDomain: "tik-tok-clone-7e100.firebaseapp.com",
    projectId: "tik-tok-clone-7e100",
    storageBucket: "tik-tok-clone-7e100.appspot.com",
    messagingSenderId: "746464341721",
    appId: "1:746464341721:web:c9c48221351b87e9f718c8",
    measurementId: "G-MDB8JH58Z1"
  };

const firebaseApp =
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db