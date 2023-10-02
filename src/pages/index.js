import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"
import PreviewCard from "@/components/Cards/PreviewCard"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import Banner from "@/components/Banner/BannerC"
import CategoriesCarousel from "@/components/Carousel/CategoriesCarousel"
import ProductDisplay from "@/components/Filter/ProductDisplay"
import Image from "next/image"

const images = [
  { src: "E-BUY STORE.png", alt: "banner" },
  { src: "skincare.png", alt: "skincare" },
  { src: "perfumes.png", alt: "perfumes" },
  { src: "furniture.png", alt: "furniture" },
  { src: "smartphones.png", alt: "phones" },
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
      <div className="container mx-auto p-8">
        <PreviewCard images={images} />

        <h1 className="text-4xl font-bold mb-6 font-causten tracking-wider border-b-8 border-EBuyYellow pl-4 pt-8 pb-4 text-EBuyDarkGray">
          New Arrivals
        </h1>
        <ProductDisplay
          currentURL="all"
          sortedProducts={products.slice(0, 4)}
        />

        <div className="w-full px-2 py-2">
          <div className="max-w-screen-sm mx-auto mt-8 flex flex-col items-center bg-EBuyOrange p-2 rounded-lg">
            <h1 className="text-white text-center font-causten font-extrabold text-xl md:text-2xl py-2">
              Featured Brands
            </h1>
            <div className="flex flex-wrap justify-center">
              <Image
                src="thewarehouse.svg"
                height={80}
                width={80}
                className="mx-2 mb-2"
                alt="The Warehouse logo"
              />
              <Image
                src="apple.svg"
                height={50}
                width={50}
                className="mx-2 mb-4"
                alt="Apple logo"
              />
              <Image
                src="oppo.svg"
                height={80}
                width={80}
                className="mx-2 mb-2"
                alt="Oppo logo"
              />
              <Image
                src="samsung.svg"
                height={80}
                width={80}
                className="mx-2 mb-2"
                alt="Samsung logo"
              />
              <Image
                src="loreal.svg"
                height={80}
                width={80}
                className="mx-2 mb-2"
                alt="Loreal logo"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 font-causten tracking-wider border-b-8 border-EBuyYellow pl-4 pt-8 pb-4 text-EBuyDarkGray">
          Top Beauty Products
        </h1>
        <ProductDisplay
          currentURL="all"
          sortedProducts={products.slice(14, 18)}
        />
      </div>
    </>
  )
}
