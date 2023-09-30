import Api from "../../util/api"
import ProductCard from "../../components/Cards/ProductCard"
import Link from "next/link"
import { useRouter } from "next/router"
import FilterComponent from "@/components/Filter/FilterComponent"

const ProductsPage = () => {
  return (
    <div>
      <Api apiRoute="products">
        {(data) => (
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-normal mb-4 pb-2 text-EBuyGray font-causten">
              All Products
            </h1>
            {/* <div className="w-11/12 border-b-2 border-EBuyBlue mb-6"></div> */}
            <div className="flex flex-wrap -m-4">
              {data?.products ? (
                <ProductsList products={data.products} />
              ) : (
                <div>No products available.</div>
              )}
            </div>
          </div>
        )}
      </Api>
    </div>
  )
}

const ProductsList = ({ products }) => {
  const router = useRouter()

  const handleProductClick = (productId) => {
    router.push(`/products/${productId}`)
  }

  return (
    <ul className="list-none flex flex-wrap">
      {products.map((product) => (
        <li key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <a onClick={() => handleProductClick(product.id)}>
            <ProductCard product={product} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ProductsPage
