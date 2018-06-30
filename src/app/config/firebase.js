import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfmhNE2uXzWJPFI4P-t29zHGgNJqyy2CY",
  authDomain: "revents-208501.firebaseapp.com",
  databaseURL: "https://revents-208501.firebaseio.com",
  projectId: "revents-208501",
  storageBucket: "revents-208501.appspot.com",
  messagingSenderId: "420112674909"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;