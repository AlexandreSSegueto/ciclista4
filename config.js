import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyBK6IUP6lATvqfPXsoh0kdQ28UfIJSGAEg",
  authDomain: "ciclistaeletronico-63ba8.firebaseapp.com",
  projectId: "ciclistaeletronico-63ba8",
  storageBucket: "ciclistaeletronico-63ba8.appspot.com",
  messagingSenderId: "1009148691114",
  appId: "1:1009148691114:web:3cd3de1b036d56499986d3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
