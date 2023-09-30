import React from "react"
import Api from "../../util/api"
import ProductCard from "../../components/Cards/ProductCard"
import { useRouter } from "next/router"
import FilterComponent from "@/components/Filter/FilterComponent"

const ProductsPage = () => {
  const router = useRouter()

  const handleProductClick = (productId) => {
    router.push(`/products/${productId}`)
  }

  return (
    <div className="container mx-auto p-6 flex">
      <div className="w-1/4 pr-4">
        {/* <FilterComponent/> */}
        {/* Apply padding to the FilterComponent */}
      </div>
      <div>
        <Api apiRoute="products">
          {(data) => (
            <>
              <h1 className="text-3xl mb-8 font-normal text-EBuyGray">
                All Products
              </h1>
              <div className="flex flex-wrap justify-center gap-6">
                {data?.products ? (
                  data.products.map((product) => (
                    <a
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                    >
                      <ProductCard product={product} />
                    </a>
                  ))
                ) : (
                  <p>No products available.</p>
                )}
              </div>
            </>
          )}
        </Api>
      </div>
    </div>
  )
}

export default ProductsPage
