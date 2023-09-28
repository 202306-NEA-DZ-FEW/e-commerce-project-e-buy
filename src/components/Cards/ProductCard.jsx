import React, { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"

const ProductCard = ({ product }) => {
  const imageUrl = product.thumbnail // Use the "thumbnail" field for the image
  const title = product.title
  const price = product.price
  const category = product.category
  const rating = product.rating

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
        <p className="text-gray-700 text-base">
          {" "}
          <AiFillStar /> {rating}{" "}
        </p>{" "}
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
          <AiOutlineShoppingCart />
        </div>
      )}
    </div>
  )
}

export default ProductCard
