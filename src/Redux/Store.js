import { configureStore } from "@reduxjs/toolkit"
import EbuyReducer from "../Redux/EbuySlice"

export const store = configureStore({
  reducer: {
    "E-buy": EbuyReducer,
  },
})
