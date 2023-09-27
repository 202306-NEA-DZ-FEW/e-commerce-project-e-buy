import React from "react"
import { useSelector } from "react-redux"

const CartState = () => {
  const cart = useSelector((state) => state["E-buy"].products)

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default CartState
