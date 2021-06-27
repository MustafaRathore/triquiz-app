import firebase from 'firebase';
import firebasedatabase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyAJ1aOef2VAql_KhKqam7DBdecroXONCu8',
  authDomain: 'z-quiz-2001.firebaseapp.com',
  databaseURL: 'https://z-quiz-2001-default-rtdb.firebaseio.com/',
  projectId: 'z-quiz-2001',
  storageBucket: 'z-quiz-2001.appspot.com',
  messagingSenderId: '613792498251',
  appId: '1:613792498251:android:b90d19e37fa2fd553343ce',
};


firebase.initializeApp(firebaseConfig);


const database = firebase.database();
export {firebase,database}