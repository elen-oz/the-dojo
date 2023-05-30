import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCbl53dLc_uoXwX1EjU7rmGt0fMd4qjNBQ',
  authDomain: 'thedojosite-355e3.firebaseapp.com',
  projectId: 'thedojosite-355e3',
  storageBucket: 'thedojosite-355e3.appspot.com',
  messagingSenderId: '132350753611',
  appId: '1:132350753611:web:c96e8034f492eb8d3386ce',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
