import React from "react"
import Link from "next/link"
import ProductCard from "../Cards/ProductCard"

const ProductDisplay = ({ currentURL, sortedProducts }) => {
  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap justify-start">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div className="p-2" key={product.id}>
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}

export default ProductDisplay
