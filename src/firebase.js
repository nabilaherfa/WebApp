import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-wCnXgSaDsc7bb-YMGcXXj_GuvU7k9Yg",
  authDomain: "ocademyteam.firebaseapp.com",
  projectId: "ocademyteam",
  storageBucket: "ocademyteam.appspot.com",
  messagingSenderId: "1052219990707",
  appId: "1:1052219990707:web:f24b35d765d566963806c6"
});
var db = firebaseApp.firestore();

export { db };