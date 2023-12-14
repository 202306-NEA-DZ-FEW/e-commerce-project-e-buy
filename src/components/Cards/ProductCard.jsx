import { addToCart } from "@/redux/slices/CartSlice"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { FaShoppingCart } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const imageUrl = product.thumbnail
  const title = product.title
  const price = product.price
  const rating = product.rating
  const category = product.category
  const stock = product.stock
  const brand = product.brand

  const [selected, setSelected] = useState(false)
  const router = useRouter()

  const handleCartClick = () => {
    dispatch(addToCart({ ...product }))
    setSelected(!selected)
  }

  const handleProductClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <div
      className={`max-w-xs mx-auto flex flex-col rounded-md overflow-hidden bg-gray-50 shadow-md relative transition-transform mb-4 ${
        selected ? "ring-4 ring-EBuyLightBlue" : ""
      }`}
      style={{ width: "282px", height: "441px" }}
    >
      <div style={{ height: "80%", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleProductClick}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex-grow flex flex-row justify-between mt-2">
        <div className="px-4 py-2 flex flex-col">
          <div
            className="font-semibold text-EBuyDarkGray text-base mb-2 cursor-pointer truncate"
            onClick={handleProductClick}
          >
            {title}
          </div>
          <div className="text-sm font-thin text-EBuyGray">{brand}</div>
        </div>

        <div className="flex flex-col justify-between items-center px-4 py-2 bg-gray-50">
          <div>
            <button className=" text-gray-700 text-sm px-2 mt-1 rounded-md">
              {price}$
            </button>
          </div>
          <div
            className="cursor-pointer text-EBuyYellow mb-2"
            onClick={handleCartClick}
          >
            <FaShoppingCart size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
