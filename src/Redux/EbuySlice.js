// EbuySlice.js
import { createSlice } from "@reduxjs/toolkit"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebaseConfig"

const initialState = {
  products: [],
  userinfo: [],
}

export const EbuySlice = createSlice({
  name: "E-buy",
  initialState,
  reducers: {
    addToCart: async (state, action) => {
      try {
        // Add the product to Firestore
        const docRef = await addDoc(collection(db, "carts"), action.payload)
        console.log("Product added to Firestore with ID:", docRef.id)

        // No need to update local state here

        // Dispatch an action to update the local state
        return action.payload
      } catch (error) {
        console.error("Error adding product to Firestore:", error)
        throw error // Rethrow the error to handle it in the component
      }
    },
  },
})

export const { addToCart } = EbuySlice.actions
export default EbuySlice.reducer
