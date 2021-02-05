import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAyfZcezVHHQ_GQ0D07vU4qg48IxjSmkCc',
  authDomain: 'depslipts-test-1.firebaseapp.com',
  databaseURL: 'https://depslipts-test-1.firebaseio.com',
  projectId: 'depslipts-test-1',
  storageBucket: 'depslipts-test-1.appspot.com',
  messagingSenderId: '385010911625',
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();