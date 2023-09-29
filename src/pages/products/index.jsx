import Link from "next/link"

function ProductsList({ products }) {
  if (!products || !products.length) {
    // Handle the case when data is undefined, null, or empty
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList
