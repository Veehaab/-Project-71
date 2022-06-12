import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCHcWc2Qt2-sU_GddZIojsqPFN91qjrMo0",
    authDomain: "project-71-1a47f.firebaseapp.com",
    projectId: "project-71-1a47f",
    storageBucket: "project-71-1a47f.appspot.com",
    messagingSenderId: "1055543197814",
    appId: "1:1055543197814:web:a0c70884166485c5d55f57"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
