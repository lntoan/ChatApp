import * as firebase from 'firebase';

// should go in a secret file
const config = {
  apiKey: "AIzaSyCBISZO9dhqXLpWVXzTRgMLnoJ4oFjdJTM",
  authDomain: "chatapp-7ff21.firebaseapp.com",
  databaseURL: "https://chatapp-7ff21.firebaseio.com",
  projectId: "chatapp-7ff21",
  storageBucket: "chatapp-7ff21.appspot.com",
  messagingSenderId: "687481095544"
};
firebase.initializeApp(config);

export default firebase;
