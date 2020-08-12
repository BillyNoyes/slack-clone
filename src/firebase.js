import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZSpmCYPS1lD3SoHIBuoQ481c70HEUDdo",
  authDomain: "slack-clone-17944.firebaseapp.com",
  databaseURL: "https://slack-clone-17944.firebaseio.com",
  projectId: "slack-clone-17944",
  storageBucket: "slack-clone-17944.appspot.com",
  messagingSenderId: "166440848645",
  appId: "1:166440848645:web:43f5e765e348c8e52a3b6c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
