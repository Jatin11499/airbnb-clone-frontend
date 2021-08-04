import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAN5Dq8eGsDQrV507k6ohL4UCrOkFbVjwA",
    authDomain: "airbnb-clone-68637.firebaseapp.com",
    projectId: "airbnb-clone-68637",
    storageBucket: "airbnb-clone-68637.appspot.com",
    messagingSenderId: "1077298962520",
    appId: "1:1077298962520:web:64bbeec62628692874aa2d",
    measurementId: "G-JGEGWDLQLJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;