// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_ocQtMquZg2_4hluxBpRv7NAOSCt5AU",
  authDomain: "portfilo-c0c7a.firebaseapp.com",
  projectId: "portfilo-c0c7a",
  storageBucket: "portfilo-c0c7a.appspot.com",
  messagingSenderId: "194012623468",
  appId: "1:194012623468:web:3b3f7f5e36eb6b71499e49",
  measurementId: "G-QNKTJD12SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);