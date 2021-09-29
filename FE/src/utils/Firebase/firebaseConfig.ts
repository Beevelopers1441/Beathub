import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const apiKey = process.env.REACT_APP_FB_APIKEY;
const messagingSenderId = process.env.REACT_APP_FB_MESSAGEING_SENDER_ID;
const appId = process.env.REACT_APP_FB_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain: "beathub-chat.firebaseapp.com",
  projectId: "beathub-chat",
  storageBucket: "beathub-chat.appspot.com",
  messagingSenderId,
  appId,
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore(firebaseApp); 
const auth = firebaseApp.auth();

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
}

export { initFirebase, db, auth };
