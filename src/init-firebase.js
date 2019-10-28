import * as firebase from "firebase/app";
import "firebase/storage";

const apiConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "skin-fuel.firebaseapp.com",
  databaseURL: "https://skin-fuel.firebaseio.com",
  projectId: "skin-fuel",
  storageBucket: "skin-fuel.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(apiConfig);


export const storageReference = firebase.storage();
