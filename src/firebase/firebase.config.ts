// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA7VePKnlgSSr1oFqq_aUhI2FSLkqnYtuo",
  authDomain: "twitterchat-caa50.firebaseapp.com",
  projectId: "twitterchat-caa50",
  storageBucket: "twitterchat-caa50.appspot.com",
  messagingSenderId: "576598854618",
  appId: "1:576598854618:web:9b7d5c51a45aab6b268ee3",
};
const WeatherAPIKey = "cfe4014938aa419ea63dee8657961131";

export const getNewsAPIKey = () => {
  return WeatherAPIKey;
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
