import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"

const Api = ({ apiRoute, handleAddToCart }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/${apiRoute}`)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [apiRoute])

  return (
    <div>
      {data && (
        <div className="flex justify-between">
          <div>
            <h1>Product List</h1>
            <div className="flex flex-wrap">
              {data.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Api
