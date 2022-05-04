// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUN4iExtmFEWvVapiyJ4iNFwBun7ZEp7o",
    authDomain: "fruits-warehouse-management.firebaseapp.com",
    projectId: "fruits-warehouse-management",
    storageBucket: "fruits-warehouse-management.appspot.com",
    messagingSenderId: "283987229491",
    appId: "1:283987229491:web:132ab3fe87e852b2f2dc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;