// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyB39RSY3v6b-w9YmtYMMr8YdG-2YO_cFSQ",
    authDomain: "clone-mar21-bf011.firebaseapp.com",
    projectId: "clone-mar21-bf011",
    storageBucket: "clone-mar21-bf011.appspot.com",
    messagingSenderId: "742198419546",
    appId: "1:742198419546:web:bb93d66e39cd6e9cdc7863",
    measurementId: "G-WTY53SBR41"
});
// db
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
