import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsV4ERtnaTnpkBABRBlsL2558pdMij4lk",
  authDomain: "reactmiapp-acc1c.firebaseapp.com",
  projectId: "reactmiapp-acc1c",
  storageBucket: "reactmiapp-acc1c.appspot.com",
  messagingSenderId: "979219723705",
  appId: "1:979219723705:web:25cc4a8d419b995659b268",
  measurementId: "G-088QLVN6F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
