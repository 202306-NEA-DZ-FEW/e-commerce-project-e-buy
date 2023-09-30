import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

/*** Using dummy items object for now to showcase
 */

const items = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 20,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
    qty: 1,
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
    qty: 1,
  },
]

const addDecimals = (number) => {
  return (Math.round(number * 100) / 100).toFixed(2)
}
const initialState = Cookies.get("cart")
  ? { ...JSON.parse(Cookies.get("cart")), loading: true }
  : {
      loading: true,
      cartItems: items,
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
