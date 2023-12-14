// SearchResult.js
import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import FilterComponent from "@/components/Filter/FilterComponent"
import ProductDisplay from "@/components/Filter/ProductDisplay"

const SearchResult = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortByRating, setSortByRating] = useState(false)
  const [sortByPriceAsc, setSortByPriceAsc] = useState(false)
  const [sortByPriceDesc, setSortByPriceDesc] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const router = useRouter()
  const currentURL = router.query.result

  const debounceTimeout = useRef(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = []
        let totalProductsFetched = 0
        const limit = 30

        while (totalProductsFetched < 100) {
          const response = await fetch(
            currentURL === "all"
              ? `https://dummyjson.com/products?skip=${totalProductsFetched}&limit=${limit}`
              : `https://dummyjson.com/products/search?q=${currentURL}&skip=${totalProductsFetched}&limit=${limit}`,
          )

          const data = await response.json()
          console.log("API response:", data)

          if (data.products.length === 0) {
            break
          }

          allProducts.push(...data.products)
          totalProductsFetched += data.products.length
          console.log("All products:", allProducts)
        }

        setProducts(allProducts)
        setFilteredProducts(allProducts)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchProducts()
  }, [currentURL])

  const debounce = (func, delay) => {
    return function (...args) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }

      debounceTimeout.current = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value
    setMinPrice(newMinPrice)
    debounce(filterProducts, 500)(newMinPrice, maxPrice)
  }

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value
    setMaxPrice(newMaxPrice)
    debounce(filterProducts, 500)(minPrice, newMaxPrice)
  }

  const filterProducts = (min, max) => {
    const filtered = products.filter((product) => {
      const price = parseFloat(product.price)
      const minPriceValue = parseFloat(min)
      const maxPriceValue = parseFloat(max)
      return (
        isNaN(price) ||
        ((isNaN(minPriceValue) || price >= minPriceValue) &&
          (isNaN(maxPriceValue) || price <= maxPriceValue))
      )
    })

    setFilteredProducts(filtered)
  }

  const handleSortByRatingChange = () => {
    setSortByRating(!sortByRating)
    setSortByPriceAsc(false)
    setSortByPriceDesc(false)
  }

  const handleSortByPriceAscChange = () => {
    setSortByPriceAsc(!sortByPriceAsc)
    setSortByRating(false)
    setSortByPriceDesc(false)
  }

  const handleSortByPriceDescChange = () => {
    setSortByPriceDesc(!sortByPriceDesc)
    setSortByRating(false)
    setSortByPriceAsc(false)
  }

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  if (!currentURL) {
    return <p>Loading...</p>
  }

  let sortedProducts = [...filteredProducts]

  if (sortByRating) {
    sortedProducts.sort((a, b) => b.rating - a.rating)
  } else if (sortByPriceAsc) {
    sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  } else if (sortByPriceDesc) {
    sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  }

  const filterCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]

  if (selectedCategories.length > 0) {
    sortedProducts = sortedProducts.filter((product) =>
      selectedCategories.includes(product.category),
    )
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 min-w-[250px]">
        <FilterComponent
          minPrice={minPrice}
          maxPrice={maxPrice}
          sortByPriceAsc={sortByPriceAsc}
          sortByPriceDesc={sortByPriceDesc}
          sortByRating={sortByRating}
          selectedCategories={selectedCategories}
          handleMinPriceChange={handleMinPriceChange}
          handleMaxPriceChange={handleMaxPriceChange}
          handleSortByPriceAscChange={handleSortByPriceAscChange}
          handleSortByPriceDescChange={handleSortByPriceDescChange}
          handleSortByRatingChange={handleSortByRatingChange}
          handleCategoryChange={handleCategoryChange}
          filterCategories={filterCategories}
        />
      </div>
      <div>
        <h1 className="text-2xl p-4 font-semibold text-EBuyGray">
          {currentURL === "all"
            ? "All Products"
            : `Search Results for ${currentURL}`}
        </h1>
        <ProductDisplay
          currentURL={currentURL}
          sortedProducts={sortedProducts}
        />
      </div>
    </div>
  )
}

export default SearchResult
