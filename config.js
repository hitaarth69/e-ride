import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAGeJKdX3SFAYrGD04UBLtjEEK-1ApTQ8g",
    authDomain: "e-ride-stage4-1b0fd.firebaseapp.com",
    projectId: "e-ride-stage4-1b0fd",
    storageBucket: "e-ride-stage4-1b0fd.appspot.com",
    messagingSenderId: "473582821371",
    appId: "1:473582821371:web:1c7db417c4391bd0d2355e"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
