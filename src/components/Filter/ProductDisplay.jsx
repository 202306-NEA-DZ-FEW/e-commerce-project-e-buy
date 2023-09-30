// ProductDisplay.js
import React from "react"
import Link from "next/link"
import ProductCard from "../Cards/ProductCard"

const ProductDisplay = ({ currentURL, sortedProducts }) => {
  return (
    <div className="w-4/5 p-4 overflow-y-auto">
      <h1 className="text-2xl mb-4">Product Search Results for {currentURL}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}

export default ProductDisplay
