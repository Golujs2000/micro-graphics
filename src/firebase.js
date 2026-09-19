// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMOr1W_KUYZgmCvfvWR8EXuWYlDOeVyNE",
  authDomain: "micro-graphics.firebaseapp.com",
  projectId: "micro-graphics",
  storageBucket: "micro-graphics.firebasestorage.app",
  messagingSenderId: "449027982333",
  appId: "1:449027982333:web:adcd2ad8280caebf0d8f94",
  measurementId: "G-FNX77W2D7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => null);
}

export { app, analytics };
export default app;
