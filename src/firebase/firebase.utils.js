import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCeH0nHs_6WialbvAcujvAgKHrjfhrgkiY',
  authDomain: 'react-tutorial-e-commerce.firebaseapp.com',
  databaseURL: 'https://react-tutorial-e-commerce.firebaseio.com',
  projectId: 'react-tutorial-e-commerce',
  storageBucket: 'react-tutorial-e-commerce.appspot.com',
  messagingSenderId: '953641064978',
  appId: '1:953641064978:web:53d2f84a3968dd7d2916cb',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
