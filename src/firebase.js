// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALdGslhwdSSyQumq9tP1fj7H3TsYgnXL4",
  authDomain: "moviesite-5ce4e.firebaseapp.com",
  projectId: "moviesite-5ce4e",
  storageBucket: "moviesite-5ce4e.appspot.com",
  messagingSenderId: "749896350894",
  appId: "1:749896350894:web:dd8fbb02129bc63801413f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app