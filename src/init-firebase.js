import * as firebase from "firebase/app";
import "firebase/storage";

export const apiConfig = {
  apiKey: "AIzaSyCOU3cWGFTsRuAJd_o63VhHG8ZuNlpK-IY",
  authDomain: "skin-fuel.firebaseapp.com",
  databaseURL: "https://skin-fuel.firebaseio.com",
  projectId: "skin-fuel",
  storageBucket: "skin-fuel.appspot.com",
  messagingSenderId: "731216024368"
};

firebase.initializeApp(apiConfig);

export const storageReference = firebase.storage().ref();
