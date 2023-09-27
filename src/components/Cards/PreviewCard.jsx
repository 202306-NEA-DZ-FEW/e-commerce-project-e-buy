import React from "react"

const PreviewCard = ({ categoryName, product, handleCategoryClick }) => {
  return (
    <div className="relative w-full">
      <div className="relative rounded-lg overflow-hidden">
        {product ? (
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="w-full h-80 flex items-center justify-center bg-gray-200">
            <p>No products available for this category.</p>
          </div>
        )}
        <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded-b">
          {categoryName}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80">
          <button
            className="text-white bg-blue-500 hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-full"
            onClick={() => handleCategoryClick(categoryName)}
          >
            See more products
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreviewCard
