import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiSeIAOw0dM_zHHGrYBraVY7DNeBzultA",
    authDomain: "ifmadm-eb5d0.firebaseapp.com",
    databaseURL: "https://ifmadm-eb5d0.firebaseio.com",
    projectId: "ifmadm-eb5d0",
    storageBucket: "",
    messagingSenderId: "27411173372"
  };
  var fbApp = firebase.initializeApp(config);

// global reference to remote database app
export const db = fbApp.database();

// global reference to remote storage
export const storageRef = fbApp.storage().ref()
export const usersRef = db.ref('Users');//creating User storage in firebase
export const signupRef = db.ref('Sign-Ups');