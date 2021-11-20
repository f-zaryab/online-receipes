import firebase from 'firebase'
import firestore from 'firebase/firestore'

//init firebase
const firebaseConfig = {
    apiKey: "AIzaSyArPLLNaEmqXTNRE0eo8xSU7DCu8q_Rgz4",
    authDomain: "ninja-smoothies-c99cd.firebaseapp.com",
    projectId: "ninja-smoothies-c99cd",
    storageBucket: "ninja-smoothies-c99cd.appspot.com",
    messagingSenderId: "464363476264",
    appId: "1:464363476264:web:79a4600f122c4b37816c1d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshot: true })

//init firebase services
const db = firebaseApp.firestore();


//export default
export default db
