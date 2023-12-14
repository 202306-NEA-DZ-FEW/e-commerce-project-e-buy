import React, { useState, useRef } from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { useDispatch } from "react-redux"
import Api from "../../util/api"
import { addToCart } from "@/redux/slices/CartSlice"
import {
  BsPlus,
  BsDash,
  BsTruck,
  BsCash,
  BsArrowCounterclockwise,
} from "react-icons/bs"

const ProductPage = ({ id }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10)
    setQuantity(newQuantity)
  }

  return (
    <Api apiRoute={`products/${id}`}>
      {(product) => {
        const { title, description, images, price, rating, brand } = product

        const renderStars = () => {
          const stars = []
          const fullStars = Math.floor(rating)
          const hasHalfStar = (rating / 2) % 1 !== 0

          for (let i = 0; i < fullStars; i++) {
            stars.push(
              <span key={i} className="text-yellow-400 text-xl p-1">
                <BsStarFill />
              </span>,
            )
          }

          if (hasHalfStar && stars.length < 5) {
            stars.push(
              <span key={fullStars} className="text-yellow-400 text-xl p-1">
                <BsStarHalf />
              </span>,
            )
          }

          while (stars.length < 5) {
            stars.push(
              <span key={stars.length} className="text-gray-400 text-xl p-1">
                <BsStar />
              </span>,
            )
          }

          return stars
        }

        return (
          <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row">
            {/* Product Images */}
            <div className="flex flex-row">
              <div className="flex flex-col mt-4 w-1/4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`cursor-pointer p-1 border ${
                      index === currentImageIndex
                        ? "border-gray-800"
                        : "border-gray-200"
                    } transition duration-300 ease-in-out transform hover:scale-110`}
                  >
                    <img
                      src={image}
                      alt={`Product Image ${index}`}
                      className="w-full h-20 object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="w-3/4 ml-4 mt-8">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`Product Image ${currentImageIndex}`}
                  className={`w-screen h-96 object-contain rounded-lg ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  } transition-opacity`}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col">
              <div className="flex flex-row">
                <h1 className="text-3xl text-EBuyDarkGray font-bold font-mono mb-2 mx-4">
                  {title}
                </h1>
                <p className="text-2xl text-EBuyDarkGray font-semibold ml-auto pr-6">
                  ${price}
                </p>
              </div>
              <div className="flex items-center font-light text-EBuyGray mb-4 mx-3">
                {renderStars()}
                <div className="p-2">{rating}</div>
              </div>
              <h1 className="text-base text-EBuyGray font-light font-open mb-2 mx-4">
                By {brand}
              </h1>

              <p className="text-EBuyGray font-open mx-4 my-4">{description}</p>

              <div className="flex items-center my-4">
                <button
                  className="bg-EBuyLightBlue hover:bg-EBuyLightBlue text-white mx-4 font-bold py-2 px-4 rounded mr-2"
                  onClick={() =>
                    dispatch(addToCart({ ...product, qty: quantity }))
                  }
                >
                  Add to Cart
                </button>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange({
                        target: { value: Math.max(1, quantity - 1) },
                      })
                    }
                    className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
                  >
                    <BsDash className="w-6 h-6" />
                  </button>
                  <span className="px-3 py-2 bg-gray-50 text-gray-800 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange({ target: { value: quantity + 1 } })
                    }
                    className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
                  >
                    <BsPlus className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-4 mt-8">
                <div className="flex items-center p-2 mb-2  text-EBuyDarkGray">
                  <BsTruck className="w-6 h-6 mr-2" /> Free Shipping
                </div>
                <div className="flex items-center p-2 mb-2  text-EBuyDarkGray">
                  <BsCash className="w-6 h-6 mr-2" /> Cash on Delivery
                </div>
                <div className="flex items-center p-2 mb-2 text-EBuyDarkGray">
                  <BsArrowCounterclockwise className="w-6 h-6 mr-2" /> Free
                  Returns
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Api>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params

  return {
    props: {
      id,
    },
  }
}

export default ProductPage
