import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCoBMSez8JEEEeu_Tw3el8XEmzJePkbGlU',
  authDomain: 'react-app-emailservice.firebaseapp.com',
  projectId: 'react-app-emailservice',
  storageBucket: 'react-app-emailservice.appspot.com',
  messagingSenderId: '572070408678',
  appId: '1:572070408678:web:72a259adea1953e0ca2627'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
