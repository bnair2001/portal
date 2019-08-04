import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR_AJHn1hqbeCvNFZY233ORSQQ0OtcuSk",
    authDomain: "the-portal-9071b.firebaseapp.com",
    databaseURL: "https://the-portal-9071b.firebaseio.com",
    projectId: "the-portal-9071b",
    storageBucket: "the-portal-9071b.appspot.com",
    messagingSenderId: "655075896508"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;