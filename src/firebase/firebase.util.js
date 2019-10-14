import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCU7R1I9G0sBLroT7UMOSQVupcfDHu1Yhw",
    authDomain: "crown-clothing-e93a3.firebaseapp.com",
    databaseURL: "https://crown-clothing-e93a3.firebaseio.com",
    projectId: "crown-clothing-e93a3",
    storageBucket: "crown-clothing-e93a3.appspot.com",
    messagingSenderId: "226981000125",
    appId: "1:226981000125:web:68e5befc7296f2679a18d4",
    measurementId: "G-BDQ2SE807V"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();

  //code for google authentication

  const provider=new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;