import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCd36PL_Zo99OV9951Pi9OAkeO03tjlo-4",
    authDomain: "crown-db-proj.firebaseapp.com",
    databaseURL: "https://crown-db-proj.firebaseio.com",
    projectId: "crown-db-proj",
    storageBucket: "crown-db-proj.appspot.com",
    messagingSenderId: "706324166089",
    appId: "1:706324166089:web:500cd50c2059375522e418",
    measurementId: "G-Y6VXYQE3EN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
