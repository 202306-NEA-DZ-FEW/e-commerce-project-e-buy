// products/index.jsx
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { fetchProductById } from "@/util/API" // Import your fetchProductById function

function Products() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [priceRange, setPriceRange] = useState({ min: 1, max: 100000 }) // Default price range
  const productsPerPage = 12

  useEffect(() => {
    async function fetchProducts() {
      try {
        const start = (page - 1) * productsPerPage + 1
        const end = start + productsPerPage - 1
        const productPromises = []

        for (let id = start; id <= end; id++) {
          productPromises.push(fetchProductById(`products/${id}`))
        }

        const productData = await Promise.all(productPromises)
        setProducts(productData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProducts()
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target
    setPriceRange({ ...priceRange, [name]: parseFloat(value) })
  }

  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.price)
    const priceMatch = price >= priceRange.min && price <= priceRange.max
    return priceMatch
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

      <div className="flex justify-center mb-4">
        <div className="w-1/3 px-2">
          <label
            htmlFor="priceRange"
            className="block text-sm font-medium text-gray-700"
          >
            Price Range
          </label>
          <div className="flex mt-1">
            <input
              type="number"
              id="minPrice"
              name="min"
              value={priceRange.min}
              onChange={handlePriceRangeChange}
              className="w-1/2 pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
            <span className="w-1/12 text-center">-</span>
            <input
              type="number"
              id="maxPrice"
              name="max"
              value={priceRange.max}
              onChange={handlePriceRangeChange}
              className="w-1/2 pl-2 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 hover:bg-gray-100 transition duration-300"
          >
            <Link href={`/products/${product.id}`}>
              <l>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.thumbnail} // Make sure this points to the correct image URL
                    alt={`Product ${product.id}`}
                    className="w-full h-full object-cover transform scale-100 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-700 mt-1">{product.description}</p>
              </l>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <div>Page {page}</div>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            filteredProducts.length < productsPerPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={nextPage}
          disabled={filteredProducts.length < productsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Products
