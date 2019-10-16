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
  
//FUNCTION FOR Storing new user into database
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapshot=await userRef.get();
    console.log(userAuth);
    console.log(userRef);
    console.log(snapshot);
    if(!snapshot.exists)
    {
      const {displayName,email} =userAuth;
      const createdAt=new Date();
      
      try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      }
      catch(err){
          console.log('error during creating user');
      }
    }
    return userRef;
}

  export default firebase;