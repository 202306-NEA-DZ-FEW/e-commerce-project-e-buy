import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyBSF6dTqceGg4d5z3HerOV-OHutzcQ_QrE",
  authDomain: "e-buy-webpage.firebaseapp.com",
  projectId: "e-buy-webpage",
  storageBucket: "e-buy-webpage.appspot.com",
  messagingSenderId: "868054644010",
  appId: "1:868054644010:web:40fd575b260a6afa4eda53",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export default { app }
