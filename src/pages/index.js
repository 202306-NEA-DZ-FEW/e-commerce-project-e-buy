// index.js
import React, { useEffect, useState } from "react"
import PreviewCard from "@/components/Cards/PreviewCard"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation])

export default function Home() {
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
    </div>
  )
}
