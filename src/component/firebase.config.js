// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyWBivDxXwihxQF4AxGyPlHeFyShTmY1c",
  authDomain: "rlandbd.firebaseapp.com",
  projectId: "rlandbd",
  storageBucket: "rlandbd.appspot.com",
  messagingSenderId: "51170568507",
  appId: "1:51170568507:web:9e105b86cebc5f27156f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app