import React, { useState } from "react"
import API from "../../util/api"
import CartState from "../../components/Cart/CartState"
import { store } from "../../Redux/Store"
import { Provider } from "react-redux"

const ProductListPage = () => {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <Provider store={store}>
      <div>
        <API apiRoute={"products"} handleAddToCart={handleAddToCart} />
        <CartState cart={cart} />
      </div>
    </Provider>
  )
}

export default ProductListPage
