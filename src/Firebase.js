import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwmLA7bAwOVesJULaNTqpmpU3cJ8gO7oU",
  authDomain: "zapkart-1af9b.firebaseapp.com",
  projectId: "zapkart-1af9b",
  storageBucket: "zapkart-1af9b.appspot.com",
  messagingSenderId: "937263529751",
  appId: "1:937263529751:web:680cab8a10e50ebdd2c152",
};

// is to connect to firebase app
const app = firebase.initializeApp(firebaseConfig);

// is to connect to firestore database
export const myDatabase = firebase.firestore();

// To Connect to Authentication (google Authentication)

//getAuth()--> method will help our react application to connect with the authentication which is  present inside the firebase

// GoogleAuthProvider --> this is a class that will help our react application to connect with google.

export const auth = getAuth(app); //pointing the Authentication system in the firbase
export const provider = new GoogleAuthProvider(); //preovider ==> google authentication
