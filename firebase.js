import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0vGGUptvrrSdaTsY_que0zDjPU1P9rhs",
  authDomain: "whats-clone-73fb0.firebaseapp.com",
  projectId: "whats-clone-73fb0",
  storageBucket: "whats-clone-73fb0.appspot.com",
  messagingSenderId: "1032276332105",
  appId: "1:1032276332105:web:e4845520faff354df8b998"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {experimentalAutoDetectLongPolling: true});

export const signIn = (email, passworld) => {
  return signInWithEmailAndPassword(auth, email, passworld);
}

export const signUp = (email, passworld) => {
  return createUserWithEmailAndPassword(auth, email, passworld);
}