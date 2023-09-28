import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { v4 as uuidv4 } from "uuid"

export const firebaseConfig = {
  apiKey: "AIzaSyBSF6dTqceGg4d5z3HerOV-OHutzcQ_QrE",
  authDomain: "e-buy-webpage.firebaseapp.com",
  projectId: "e-buy-webpage",
  storageBucket: "e-buy-webpage.appspot.com",
  messagingSenderId: "868054644010",
  appId: "1:868054644010:web:40fd575b260a6afa4eda53",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

const generateUserId = () => {
  let userId

  if (typeof window !== "undefined" && window.localStorage) {
    userId = localStorage.getItem("uniqueUserId")
  }

  if (!userId) {
    userId = uuidv4()

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("uniqueUserId", userId)
    }
  }

  return userId
}

const userId = generateUserId()

export { app, db, auth, userId }
