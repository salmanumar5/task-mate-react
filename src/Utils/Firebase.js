// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhGnJT1_DL2-OCGabRMaW76N-IFzOaNAk",
  authDomain: "task-mate-c37c5.firebaseapp.com",
  projectId: "task-mate-c37c5",
  storageBucket: "task-mate-c37c5.appspot.com",
  messagingSenderId: "249531270454",
  appId: "1:249531270454:web:86a2a507e08b5aec751f97",
  measurementId: "G-NDY6FMX4MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);