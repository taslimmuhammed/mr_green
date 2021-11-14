import firebase from "firebase";
import 'firebase/firebase-auth';
import "firebase"
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA14aRjTbTrjaSj8QeIpeyRm7zOlNKRmmg",
  authDomain: "mr-green-a0d6a.firebaseapp.com",
  projectId: "mr-green-a0d6a",
  storageBucket: "mr-green-a0d6a.appspot.com",
  messagingSenderId: "1021949277242",
  appId: "1:1021949277242:web:ed43b853cb546b22bd7103",
  measurementId: "G-EBWRNH2B52"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);