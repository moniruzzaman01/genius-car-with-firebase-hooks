// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYFSfpi0MukWJht5TJ10Jt-shPCPjvXf4",
    authDomain: "genius-car-6ca4e.firebaseapp.com",
    projectId: "genius-car-6ca4e",
    storageBucket: "genius-car-6ca4e.appspot.com",
    messagingSenderId: "342034781674",
    appId: "1:342034781674:web:8c8b9d15c9919c9f4ace93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;