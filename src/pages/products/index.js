// Index.js inside the products folder

import React from "react"
import Api from "../../util/api"
import CartState from "../../components/Cart/CartState"
import { store } from "../../Redux/Store"
import { Provider } from "react-redux"

const ProductListPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Api apiRoute={"products"} />
        <CartState />
      </div>
    </Provider>
  )
}

export default ProductListPage
