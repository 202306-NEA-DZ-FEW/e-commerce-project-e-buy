import TempCard from "@/components/Filter/TempCard"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SearchResult() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const router = useRouter()
  const currentURL = router.query.result

  useEffect(() => {
    if (currentURL) {
      fetch(`https://dummyjson.com/products/search?q=${currentURL}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products)
          setFilteredProducts(data.products)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    }
  }, [currentURL])

  const handleSubmit = (e) => {
    e.preventDefault()

    const filtered = products.filter((product) => {
      const price = parseFloat(product.price)
      const min = parseFloat(minPrice)
      const max = parseFloat(maxPrice)
      return (
        isNaN(price) ||
        ((isNaN(min) || price >= min) && (isNaN(max) || price <= max))
      )
    })

    setFilteredProducts(filtered)
  }

  if (!currentURL) {
    return <p>Loading...</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Sidebar */}
      <div className="md:col-span-1 p-4 w-max max-h-screen">
        <div className="bg-gray-300 rounded-lg p-4 h-[800px] w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 h-8 border rounded-md px-2 focus:outline-none"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 h-8 border rounded-md px-2 focus:outline-none"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button type="submit" className="btn-primary h-8">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-2 overflow-y-auto max-h-screen">
        <h1 className="text-2xl mb-4">
          Product Search Results for {currentURL}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <TempCard
                  imageUrl={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
