import React, { useState } from "react";

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
  const [priceSectionOpen, setPriceSectionOpen] = useState(false);
  const [ratingSectionOpen, setRatingSectionOpen] = useState(false);
  const [categorySectionOpen, setCategorySectionOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "price":
        setPriceSectionOpen(!priceSectionOpen);
        break;
      case "rating":
        setRatingSectionOpen(!ratingSectionOpen);
        break;
      case "category":
        setCategorySectionOpen(!categorySectionOpen);
        break;
      default:
        break;
    }
  };

  const getArrowIcon = (section) => {
    return section === "price"
      ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 inline-block transition-transform duration-300 transform rotate-${
            priceSectionOpen ? "180" : "0"
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
      : section === "rating"
      ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 inline-block transition-transform duration-300 transform rotate-${
            ratingSectionOpen ? "180" : "0"
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
      : section === "category"
      ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 inline-block transition-transform duration-300 transform rotate-${
            categorySectionOpen ? "180" : "0"
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
      : null;
  };

  return (
    <div className="w-1/6 h-fit outline outline-1 outline-gray-300 mt-1 text-gray-600">
      <div>
        <div className="flex justify-center items-center space-x-3">
          <span className="text-2xl">Filter</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-gray-600">
            <path d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z"/>
          </svg>
        </div>
        <div
        className="flex justify-between bg-gray-100 text-xl cursor-pointer outline outline-1 outline-gray-300 p-3"
        onClick={() => toggleSection("price")}>
          <h2>
            Filter by price 
          </h2>
          <h2>
            {getArrowIcon("price")}
          </h2>
        </div>
        {priceSectionOpen && (
          <div className="flex space-x-2 justify-center my-3">
            <input
              type="number"
              placeholder="Min"
              className="w-1/3 h-8 border rounded-md px-2 focus:outline-none"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/3 h-8 border rounded-md px-2 focus:outline-none"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        )}
        <div className="flex justify-between bg-gray-100 text-xl cursor-pointer outline outline-1 outline-gray-300 p-3"
        onClick={() => toggleSection("rating")}>
          <h2
            className=""
            
          >
            Filter by Rating 
          </h2>
          <h2>
            {getArrowIcon("rating")}
          </h2>
        </div>
        {ratingSectionOpen && (
          <>
            <input
              className="my-3 ml-3"
              type="checkbox"
              checked={sortByRating}
              onChange={handleSortByRatingChange}
            />
            <label className="ml-1">Sort by rating</label>
          </>
        )}
        <div
        className="flex justify-between bg-gray-100 text-xl cursor-pointer outline outline-1 outline-gray-300 p-3"
        onClick={() => toggleSection("category")}
        >
        <h2>
          Filter by Category 
        </h2>
        <h2>
          {getArrowIcon("category")}
        </h2>
        </div>
        {categorySectionOpen && (
          <div>
            {filterCategories.map((category) => (
              <div key={category} className="mx-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label className="ml-2">{category}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
