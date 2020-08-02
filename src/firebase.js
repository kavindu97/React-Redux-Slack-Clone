import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCgVEz-0A60LuU51d_NUpPdjaxoTDLRpMg",
    authDomain: "reactslack-689f7.firebaseapp.com",
    databaseURL: "https://reactslack-689f7.firebaseio.com",
    projectId: "reactslack-689f7",
    storageBucket: "reactslack-689f7.appspot.com",
    messagingSenderId: "663463525607",
    appId: "1:663463525607:web:038b04536bb1c965d7b642",
    measurementId: "G-DSE7JC3V8V"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;