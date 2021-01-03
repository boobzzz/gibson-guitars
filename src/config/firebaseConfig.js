import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXtph7ef_cCnoMlmA3a9noky96o6oofsw",
    authDomain: "product-list-ca80c.firebaseapp.com",
    projectId: "product-list-ca80c",
    storageBucket: "product-list-ca80c.appspot.com",
    messagingSenderId: "165813308437",
    appId: "1:165813308437:web:fede64703032ec7263121c",
    measurementId: "G-Q2EQ7MEM2D"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, db, timestamp }