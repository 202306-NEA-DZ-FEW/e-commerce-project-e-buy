import React from "react"
import Link from "next/link"
import ProductCard from "../Cards/ProductCard"

const ProductDisplay = ({ currentURL, sortedProducts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">
        {" "}
        {currentURL == "all"
          ? "All Products"
          : `Search Results for ${currentURL}`}
      </h1>
      <div className="flex flex-wrap justify-start">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
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
