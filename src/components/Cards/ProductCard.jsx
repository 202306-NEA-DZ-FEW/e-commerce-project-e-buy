import React, { useState } from "react"

const ProductCard = ({ product }) => {
  const imageUrl = product.image
  const title = product.title
  const price = product.price
  const category = product.category

  const [hovered, setHovered] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleHover = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
  }

  return (
    <div
      className={`max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg relative transition-transform mb-4 ${
        hovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="px-4 py-2 bg-white">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
        <p className="text-gray-700 text-base">{category}</p>
      </div>

      {/* Add to Cart Button */}
      {hovered && !addedToCart && (
        <button
          className="bg-purple-500 text-white text-sm px-3 py-1 rounded-b-lg absolute bottom-0 left-0 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}

      {/* Cart Icon */}
      {addedToCart && (
        <div className="absolute bottom-2 right-2 text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 0h18M2 9h20"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default ProductCard
