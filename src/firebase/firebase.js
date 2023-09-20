import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWbeulXCexwGH8FMnnXoXiIjK0kXRJfGY",
  authDomain: "todos-fd042.firebaseapp.com",
  projectId: "todos-fd042",
  storageBucket: "todos-fd042.appspot.com",
  messagingSenderId: "969190433134",
  appId: "1:969190433134:web:b559266ca81314cb84617f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// apiKey: `${process.env.API_KEY}`,
// authDomain: `${process.env.AUTH_DOMAIN}`,
// projectId: `${process.env.PROJECT_ID}`,
// storageBucket: `${process.env.STORAGE_BUCKET}`,
// messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
// appId: `${process.env.APP_ID}`,

// apiKey: "AIzaSyBWbeulXCexwGH8FMnnXoXiIjK0kXRJfGY",
// authDomain: "todos-fd042.firebaseapp.com",
// projectId: "todos-fd042",
// storageBucket: "todos-fd042.appspot.com",
// messagingSenderId: "969190433134",
// appId: "1:969190433134:web:b559266ca81314cb84617f",
