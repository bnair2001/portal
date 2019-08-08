# Portal
A content management system meant for schools and colleges that would hyelp share notes and lectures built using react and firebase

### Installation
```
git clone
cd portal
```
If you want to use the php-mysql version use:
```
cd portal- php mysql
```
otherwise:
```
cd portal- reactjs
```
Then you need to configure the firebase.js file located at this path:
```
/portal- reactjs/src/app/config/firebase.js
```
The code inside would be like this:
```
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;
```
Configure your firebase details at [this link](https://firebase.google.com/)
and fill in the authentication details.
Then run:
```
npm start
```
And you are good to go!! Feel free to make a pull request.

### Credits:
[Bharath Nair](https://github.com/bnair2001), <br />
[Steve Paul](https://github.com/ST2-EV)


