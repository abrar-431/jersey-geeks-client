// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl3UF6Btf00RJMpX7cJt7momqi7oZF92w",
  authDomain: "jersey-geeks.firebaseapp.com",
  projectId: "jersey-geeks",
  storageBucket: "jersey-geeks.appspot.com",
  messagingSenderId: "927592285373",
  appId: "1:927592285373:web:0f98b054be4f622ffc23d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;