import firebase from 'firebase/compat/app';


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

const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
}

export { initFirebase };
