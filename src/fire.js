import { initializeApp } from "firebase/app";

// import firebase from "firebase";
// require("firebase/auth");
// const firebaseConfig = {
//   apiKey: "AIzaSyDTk3imeS6g6ZLq7-p96WfsG8lw_ikRhyY",
//   authDomain: "studentka-app.firebaseapp.com",
//   projectId: "studentka-app",
//   storageBucket: "studentka-app.appspot.com",
//   messagingSenderId: "667461145258",
//   appId: "1:667461145258:web:e5c91283c6480a66d676d3",
// };

// const fire = firebase.initializeApp(firebaseConfig);
// export default fire;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTk3imeS6g6ZLq7-p96WfsG8lw_ikRhyY",
  authDomain: "studentka-app.firebaseapp.com",
  projectId: "studentka-app",
  storageBucket: "studentka-app.appspot.com",
  messagingSenderId: "667461145258",
  appId: "1:667461145258:web:e5c91283c6480a66d676d3",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;
