import React, { useState } from "react"

const FilterComponent = ({
  minPrice,
  maxPrice,
  sortByPriceAsc,
  sortByPriceDesc,
  sortByRating,
  selectedCategories,
  handleMinPriceChange,
  handleMaxPriceChange,
  handleSortByPriceAscChange,
  handleSortByPriceDescChange,
  handleSortByRatingChange,
  handleCategoryChange,
  filterCategories,
}) => {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const formatCategoryLabel = (category) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const getArrowIcon = (section) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 inline-block transition-transform duration-300 transform rotate-${
          activeSection === section ? "180" : "0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    )
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-1 pt-6 pr-6">
      <div className={`border p-2 rounded bg-white ${activeSection ? "" : ""}`}>
        <div
          className={`flex justify-between items-center mb-2 ${
            activeSection ? "border-b-4" : "border-b-4"
          }`}
        >
          <span className="text-xl pb-2">Filter</span>
        </div>

        <div
          className={`filter-section mb-2 ${
            activeSection === "price" ? "border-b" : "border-b"
          }`}
        >
          <div
            className={`flex justify-between cursor-pointer p-2 ${
              activeSection === "price" && "border-b"
            }`}
            onClick={() => toggleSection("price")}
          >
            <h2>Price</h2>
            {getArrowIcon("price")}
          </div>
          {activeSection === "price" && (
            <div className="ml-4">
              <div className="flex space-x-2 justify-center my-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 h-6 border rounded-md px-2 focus:outline-none"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 h-6 border rounded-md px-2 focus:outline-none"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          )}
        </div>

        <div
          className={`filter-section mb-2 ${
            activeSection === "rating" ? "border-b" : "border-b"
          }`}
        >
          <div
            className={`flex justify-between cursor-pointer p-2 ${
              activeSection === "rating" && "border-b"
            }`}
            onClick={() => toggleSection("rating")}
          >
            <h2>Sort</h2>
            {getArrowIcon("rating")}
          </div>
          {activeSection === "rating" && (
            <div className="ml-4">
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={sortByRating}
                  onChange={handleSortByRatingChange}
                />
                <label className="checkbox-label">Top Rated</label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={sortByPriceAsc}
                  onChange={handleSortByPriceAscChange}
                />
                <label className="checkbox-label">Price Low to High</label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={sortByPriceDesc}
                  onChange={handleSortByPriceDescChange}
                />
                <label className="checkbox-label">Price High to Low</label>
              </div>
            </div>
          )}
        </div>

        <div
          className={`filter-section ${activeSection === "category" ? "" : ""}`}
        >
          <div
            className={`flex justify-between cursor-pointer p-2 ${
              activeSection === "category" && "border-b"
            }`}
            onClick={() => toggleSection("category")}
          >
            <h2>Category</h2>
            {getArrowIcon("category")}
          </div>
          {activeSection === "category" && (
            <div className="ml-4">
              {filterCategories.map((category) => (
                <div key={category} className="mb-1">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label className="label-title ml-2 mb-1">
                    {formatCategoryLabel(category)}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
