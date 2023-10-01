import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"
import PreviewCard from "@/components/Cards/PreviewCard"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import Banner from "@/components/Banner/BannerC"
import CategoriesCarousel from "@/components/Cards/CategoriesCarousel"
import ProductDisplay from "@/components/Filter/ProductDisplay"

const images = [
  { src: "bannerC.jpg", alt: "banner" },
  { src: "furniture.png", alt: "furniture" },
  { src: "homedeco.png", alt: "homedeco" },
  { src: "dress.png", alt: "dresses" },
  //  { src: "../../public/" , alt: ""}
]
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

  const swiperParams = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  const handleCategoryClick = (categoryName) => {
    // Handle navigation to the category page
    console.log(`Navigating to category: ${categoryName}`)
  }

  return (
    <>
      <div className="container mx-auto p-2">
        <PreviewCard images={images} />

        {/* <CategoriesCarousel categories={categories} /> */}
        <h1 className="text-4xl font-bold mb-4 text-EBuyOrange">New Arrival</h1>
        <br></br>
        <ProductDisplay
          currentURL="all"
          sortedProducts={products.slice(0, 6)}
        />
      </div>
    </>
  )
}
