import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"

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

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
