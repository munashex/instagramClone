import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCGm9yZG2-lC8Yd__L5lbb7zBcUmdAEKds",
  authDomain: "instagramclone-958ff.firebaseapp.com",
  projectId: "instagramclone-958ff",
  storageBucket: "instagramclone-958ff.appspot.com",
  messagingSenderId: "932884441884",
  appId: "1:932884441884:web:fd63f3d8d91bab02b568d9"
};


const app = initializeApp(firebaseConfig); 
const auth = getAuth(app)  
const db = getFirestore(app)
const storage = getStorage(app)
export {auth, db, storage}