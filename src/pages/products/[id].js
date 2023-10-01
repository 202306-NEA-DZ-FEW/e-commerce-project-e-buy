import React, { useState, useRef } from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import Api from "../../util/api"

const ProductPage = ({ id }) => {
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const imageSliderRef = useRef(null)

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10)
    setQuantity(newQuantity)
  }

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % id.images)
        setIsTransitioning(false)
      }, 300) // Adjust the duration to match your CSS transition duration
    }
  }

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? id.images.length - 1 : prevIndex - 1,
        )
        setIsTransitioning(false)
      }, 300) // Adjust the duration to match your CSS transition duration
    }
  }

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || []

    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
    }
    existingCart.push(newItem)

    localStorage.setItem("cart", JSON.stringify(existingCart))

    setQuantity(1)

    alert(`Added ${quantity} ${product.title}(s) to Cart`)
  }

  return (
    <Api apiRoute={`products/${id}`}>
      {(product) => {
        const { title, description, images, price, rating } = product

        const renderStars = () => {
          const stars = []
          const fullStars = Math.floor(rating)
          const hasHalfStar = (rating / 2) % 1 !== 0

          for (let i = 0; i < fullStars; i++) {
            stars.push(
              <span key={i} className="text-yellow-400">
                <BsStarFill />
              </span>,
            )
          }

          if (hasHalfStar && stars.length < 5) {
            stars.push(
              <span key={fullStars} className="text-yellow-400">
                <BsStarHalf />
              </span>,
            )
          }

          while (stars.length < 5) {
            stars.push(
              <span key={stars.length} className="text-gray-400">
                <BsStar />
              </span>,
            )
          }

          return stars
        }

        return (
          <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 relative">
              <img
                src={product.images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex}`}
                className={`w-full h-96 object-cover rounded-lg ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                } transition-opacity`}
              />

              <div className="flex mt-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1/5 cursor-pointer p-1 border ${
                      index === currentImageIndex
                        ? "border-gray-800"
                        : "border-gray-200"
                    } transition duration-300 ease-in-out transform hover:scale-110`}
                  >
                    <img
                      src={image}
                      alt={`Product Image ${index}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl font-bold font-mono mb-2">{title}</h1>

                <div className="flex items-center mb-2">{renderStars()}</div>

                <p className="text-gray-800 mb-4">{description}</p>

                <div className="mb-4 flex items-center">
                  <label htmlFor="quantity" className="block font-bold mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="border border-gray-300 rounded px-3 py-2 w-20"
                  />
                </div>

                <div className="flex items-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                  <div className="bg-gray-200 border rounded p-3">
                    <p className="text-lg font-bold">${price}</p>
                  </div>
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
