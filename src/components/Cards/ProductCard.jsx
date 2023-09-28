import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/EbuySlice"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    alert(`Added ${product.title} to cart!`)
  }

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button className="border-8" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
