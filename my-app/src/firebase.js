  import firebase from 'firebase'
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCH-e_VXIwcI_AOi9IUnPezXdwayv8k8Cg",
    authDomain: "manoa-board-15ff3.firebaseapp.com",
    projectId: "manoa-board-15ff3",
    storageBucket: "manoa-board-15ff3.appspot.com",
    messagingSenderId: "218804848336",
    appId: "1:218804848336:web:848f154679b2d20188c0d5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export const storage = firebase.storage().ref();
  const auth = firebase.auth();

  export {auth};
  export default db;