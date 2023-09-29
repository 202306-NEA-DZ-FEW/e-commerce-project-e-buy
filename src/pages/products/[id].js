// [id].js
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)

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

  if (!product) {
    return <div className="text-center mt-4">Loading...</div>
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-800">{product.description}</p>
      <img src={product.thumbnail} />
    </div>
  )
}

export default ProductDetail
