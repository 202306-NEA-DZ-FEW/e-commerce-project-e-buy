// api.js

import React, { useEffect, useState } from "react"
import ProductCard from "@/components/Cards/ProductCard"
import { userId } from "../firebaseConfig"

const Api = ({ apiRoute }) => {
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
                  userId={userId} // Pass userId as a prop
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
