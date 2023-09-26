import Image from "next/image"
import React from "react"

const ProductCard = ({ product }) => {
  const imageUrl = product.image
  const title = product.title
  const price = product.price
  const category = product.category
  const description = product.description

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={title} width={640} height={480} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">Price: ${price}</p>
        <p className="text-gray-700 text-base">Category: {category}</p>
      </div>
    </div>
  )
}

export default ProductCard
