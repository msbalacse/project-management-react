import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAalUyZgf5VdFgGpIwT5L-kDUTtuvffiR8",
  authDomain: "project-management-react-586b3.firebaseapp.com",
  projectId: "project-management-react-586b3",
  storageBucket: "project-management-react-586b3.appspot.com",
  messagingSenderId: "614308997590",
  appId: "1:614308997590:web:f49cff79420ccd5f2a1c77",
  measurementId: "G-F2X5NY708H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// database

const db = getFirestore(app);
