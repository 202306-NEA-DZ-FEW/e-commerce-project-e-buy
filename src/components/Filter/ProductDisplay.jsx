import React from "react"
import Link from "next/link"
import ProductCard from "../Cards/ProductCard"

const ProductDisplay = ({ currentURL, sortedProducts }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap gap-2 justify-center">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div className="p-2" key={product.id}>
              {/* <Link href={`/products/${product.id}`}> */}
              <ProductCard product={product} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <h1 className="font-semibold text-EBuyGray text-center">
            Loading...
          </h1>
        )}
      </div>
    </div>
  )
}

export default ProductDisplay
