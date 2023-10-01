import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const addDecimals = (number) => {
  return (Math.round(number * 100) / 100).toFixed(2)
}
const initialState = Cookies.get("cart")
  ? { ...JSON.parse(Cookies.get("cart")), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "",
    }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find(
        (element) => element.id === item.id,
      )
      if (existItem) {
        state.cartItems = state.cartItems.map((element) =>
          element.id === existItem.id ? item : element,
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
      )
      if (state.itemsPrice !== 0) {
        state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 4.99)
      }

      state.taxPrice = addDecimals(Number(0.07 * state.itemsPrice))
      state.totalPrice =
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)

      Cookies.set("cart", JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
      )
      state.shippingPrice = addDecimals(0)
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
      state.totalPrice = (
        Number(state.itemsPrice) +
        // Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)
      state.showSidebar = state.cartItems.length > 0
      Cookies.set("cart", JSON.stringify(state))
    },
    hideLoading: (state) => {
      state.loading = false
    },
  },
})

export const { addToCart, removeFromCart, hideLoading } = cartSlice.actions
export default cartSlice.reducer
