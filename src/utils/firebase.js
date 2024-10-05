// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB83pt8SRprzHz4FMCGQQO-N4zegTUo9hs",
  authDomain: "netflixgpt-a963c.firebaseapp.com",
  projectId: "netflixgpt-a963c",
  storageBucket: "netflixgpt-a963c.appspot.com",
  messagingSenderId: "1057129894087",
  appId: "1:1057129894087:web:776374ea1529c65098eee2",
  measurementId: "G-9D56001B18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();

