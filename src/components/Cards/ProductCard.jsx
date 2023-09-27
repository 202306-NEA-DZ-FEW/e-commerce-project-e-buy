import React from "react"

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
