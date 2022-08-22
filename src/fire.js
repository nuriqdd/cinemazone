import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZxxxx-Ez7Rb_ONexytOrMIThNqYDwJTM",
  authDomain: "kinozone-30feb.firebaseapp.com",
  projectId: "kinozone-30feb",
  storageBucket: "kinozone-30feb.appspot.com",
  messagingSenderId: "61598878220",
  appId: "1:61598878220:web:30e065d80abe485a64fc29",
  measurementId: "G-NBZCB1WJDS",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
