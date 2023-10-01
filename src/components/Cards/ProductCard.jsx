import React, { useState } from "react"
import { useRouter } from "next/router"
import { FaStar, FaShoppingCart } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const imageUrl = product.thumbnail
  const title = product.title
  const price = product.price
  const rating = product.rating

  const [selected, setSelected] = useState(false)
  const router = useRouter()

  const handleCartClick = () => {
    setSelected(!selected)
  }

  const handleProductClick = () => {
    router.push(`/product/${product.id}`)
  }

  return (
    <div
      className={`max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg relative transition-transform mb-4 ${
        selected ? "ring-4 ring-yellow-400" : ""
      }`}
    >
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover cursor-pointer"
          onClick={handleProductClick}
        />
        <div
          className={`absolute top-2 right-2 cursor-pointer text-gray-400`}
          onClick={handleCartClick}
        >
          <FaShoppingCart size={24} />
        </div>
      </div>

      <div className="px-4 py-2 bg-white">
        <div
          className="font-bold text-lg mb-2 cursor-pointer"
          onClick={handleProductClick}
        >
          {title}
        </div>

        <div className="text-yellow-400 flex items-center space-x-1 mt-1">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <button className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-b-lg mt-2 w-full">
          {price}$
        </button>

        {selected && (
          <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded mt-2 w-full">
            Added to Cart
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
