import React, { useState, useEffect } from "react"

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([])
  const [categoryImages, setCategoryImages] = useState([])

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
    async function fetchCategoryImages() {
      const images = []

      for (const category of categories) {
        try {
          const response = await fetch(
            `https://dummyjson.com/products?category=${category}`,
          )
          const jsonData = await response.json()
          const product = jsonData.products[0]

          images.push(product.thumbnail)
        } catch (error) {
          console.error(
            `Error fetching product thumbnail for category ${category}:`,
            error,
          )
          images.push("") // Push an empty string if there's an error
        }
      }

      setCategoryImages(images)
    }

    if (categories.length > 0) {
      fetchCategoryImages()
    }
  }, [categories])

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="inline-block w-40 h-40 rounded-full overflow-hidden relative"
          >
            <div className="w-full h-32 relative">
              <img
                src={categoryImages[index] || "placeholder-image-url.jpg"}
                alt={category}
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <a
                href={`link-to-category/${category}`}
                className="absolute bottom-0 left-0 right-0 p-2 text-blue-500 hover:underline hover:text-blue-800 transition duration-300 text-center block"
              >
                {category}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryCarousel
