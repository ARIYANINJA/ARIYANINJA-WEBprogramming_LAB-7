import firebase from 'firebase/app' ;
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAFkVSviWRVh2-GlIOuzKzwhNPynXBgiHk",
    authDomain: "arya-lab-7.firebaseapp.com",
    projectId: "arya-lab-7",
    storageBucket: "arya-lab-7.appspot.com",
    messagingSenderId: "176930241765",
    appId: "1:176930241765:web:9dc9d14a302bfc8c7e280c"
  }
  firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };