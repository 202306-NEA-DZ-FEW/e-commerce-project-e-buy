import React, { useState, useEffect } from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import Api from "../../util/api"
import ProductCard from "../../components/Cards/ProductCard"

const ProductPage = ({ id }) => {
  const [product, setProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1) // Default quantity is 1

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10)
    setQuantity(newQuantity)
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const jsonData = await response.json()
        setProduct(jsonData)
      } catch (error) {
        console.error(error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1,
    )
  }

  const addToCart = () => {
    // Retrieve existing cart data from local storage (if any)
    const existingCart = JSON.parse(localStorage.getItem("cart")) || []

    // Add the selected product and quantity to the cart
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    }
    existingCart.push(newItem)

    // Update the cart data in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart))

    // Reset the quantity to 1 (or any default value)
    setQuantity(1)

    // Inform the user that the item has been added to the cart
    alert(`Added ${quantity} ${product.title}(s) to Cart`)
  }

  const renderStars = () => {
    const stars = []
    const rating = product.rating // Use the rating from the current product
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

    // Fill the rest with empty stars to make up to a total of 5 stars
    while (stars.length < 5) {
      stars.push(
        <span key={stars.length} className="text-gray-400">
          <BsStar />
        </span>,
      )
    }

    return stars
  }

  if (!product) {
    return <div className="text-center mt-4">Loading...</div>
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row">
      {/* Left side - Image Slider */}
      <div className="w-full md:w-1/2 pr-4">
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={prevImage}
          >
            &lt;
          </button>
          <img
            src={product.images[currentImageIndex]}
            alt={`Product Image ${currentImageIndex}`}
            className="w-full h-96 object-contain"
          />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>

        {/* Display small images below the slider */}
        <div className="flex mt-4">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="w-1/5 cursor-pointer p-1 border border-gray-200"
            >
              <img
                src={image}
                alt={`Product Image ${index}`}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Product Information */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          {/* Star Rating */}
          <div className="flex items-center mb-2">{renderStars()}</div>

          <p className="text-gray-800 mb-4">{product.description}</p>

          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <label htmlFor="quantity" className="block font-bold">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded px-3 py-2 w-20 ml-2"
                />
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <div className="bg-gray-200 border rounded p-3 ml-4">
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
