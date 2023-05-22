import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX4juCn0u8iOncMxMiPPLJS4lgsfqZa4Q",
  authDomain: "fir-auth-6b5f9.firebaseapp.com",
  projectId: "fir-auth-6b5f9",
  storageBucket: "fir-auth-6b5f9.appspot.com",
  messagingSenderId: "627508802570",
  appId: "1:627508802570:web:ca35ea0c9758ca4cca1bf3",
  measurementId: "G-MSVHK4CF2G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };
