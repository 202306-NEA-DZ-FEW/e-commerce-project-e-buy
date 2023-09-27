import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  userinfo: [],
}

export const EbuySlice = createSlice({
  name: "E-buy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload]
    },
  },
})

export const { addToCart } = EbuySlice.actions
export default EbuySlice.reducer
