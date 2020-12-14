
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';
// import 'firebase/analytics';
import { firebaseConfig } from './firebase-config';

const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()
export const auth = fb.auth();
export const storage = fb.storage();