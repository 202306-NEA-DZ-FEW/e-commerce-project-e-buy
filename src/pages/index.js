import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"
import PreviewCard from "@/components/Cards/PreviewCard"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation])

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products") // Update the API endpoint
        const jsonData = await response.json()
        setProducts(jsonData.products) // Use jsonData.products to access the array of products
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const [categories, setCategories] = useState([])
  const [productsByCategory, setProductsByCategory] = useState({})

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
        )
        const jsonData = await response.json()
        setCategories(jsonData)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    async function fetchProductsForCategories() {
      const productsByCategory = {}

      for (const category of categories) {
        try {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}`,
          )
          const jsonData = await response.json()
          productsByCategory[category] = jsonData.products
        } catch (error) {
          console.error(
            `Error fetching products for category ${category}:`,
            error,
          )
        }
      }

      setProductsByCategory(productsByCategory)
    }

    if (categories.length > 0) {
      fetchProductsForCategories()
    }
  }, [categories])

  const swiperParams = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  const handleCategoryClick = (categoryName) => {
    // Handle navigation to the category page here
    console.log(`Navigating to category: ${categoryName}`)
  }

  return (
    <div className="container mx-auto p-4">
      <Swiper slidesPerView={1} navigation={swiperParams.navigation}>
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <PreviewCard
              categoryName={category}
              product={productsByCategory[category] || null}
              handleCategoryClick={handleCategoryClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
