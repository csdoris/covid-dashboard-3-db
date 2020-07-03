import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "My-API-Key",
  authDomain: "<My-Domain>.firebaseapp.com",
  databaseURL: "https://<My-Domain>.firebaseio.com",
  projectId: "<My-Domain>",
  storageBucket: "<My-Domain>.appspot.com",
  messagingSenderId: "My-Sender-Id",
  appId: "My-App-Id"

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseData = firebaseDB.ref();

export {
  firebase,
  firebaseDB,
  firebaseData,
}
