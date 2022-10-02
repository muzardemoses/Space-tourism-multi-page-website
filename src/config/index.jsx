// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxiNk0tPQKxIzjGEwkOdmzXZ2Q0dkfDC0",
  authDomain: "space-tourism-multipagewebsite.firebaseapp.com",
  projectId: "space-tourism-multipagewebsite",
  storageBucket: "space-tourism-multipagewebsite.appspot.com",
  messagingSenderId: "341955138144",
  appId: "1:341955138144:web:58ea628306ead369f7a905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app
export default app;