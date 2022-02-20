import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAgITyBMCFcEN8NAp2-Y9pLIhyuCYTOdg",
  authDomain: "react-native-mobil-app.firebaseapp.com",
  projectId: "react-native-mobil-app",
  storageBucket: "react-native-mobil-app.appspot.com",
  messagingSenderId: "70745755780",
  appId: "1:70745755780:web:76422e1acde6cf4dcab2d1",
  measurementId: "G-GE4BYGM953",
};

let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//const db = app.firestore();

const fireStore = firebase.fireStore();
const auth = firebase.auth();

export { fireStore, auth };
