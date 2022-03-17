import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZZbw7IsqQa02d-9dDwz-amBn65jsUFCY",
  authDomain: "authentication-tutorial-60a7b.firebaseapp.com",
  projectId: "authentication-tutorial-60a7b",
  storageBucket: "authentication-tutorial-60a7b.appspot.com",
  messagingSenderId: "967423247405",
  appId: "1:967423247405:web:abe14445ca63c74e98e4a4",
  measurementId: "G-C1RH94FMYP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
