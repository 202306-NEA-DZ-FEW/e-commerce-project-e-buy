import React, { useState } from "react"
import { useRouter } from "next/router"
import { BsSearchHeart } from "react-icons/bs"
import Api from "../../util/api"

export default function Filter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && searchTerm.length > 0) {
      router.push(`/searchResult/${searchTerm}`)
    }
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    setShowResults(e.target.value !== "")
  }

  return (
    <div className="flex items-center relative ml-4 max-w-screen-sm md:text-xs sm:text-xs">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-200 px-3 py-2 rounded-md text-sm outline-none w-full md:w-56 lg:w-64"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowResults(true)}
      />
      <BsSearchHeart className="text-gray-400 absolute right-3 top-3" />

      {showResults && searchTerm && (
        <Api apiRoute={`products/search?q=${searchTerm}`}>
          {(data) => {
            if (data) {
              return (
                <div className="mt-2">
                  <h2 className="text-sm font-semibold"></h2>
                  <ul>
                    {data.products.map((product) => (
                      <li key={product.id} className="text-sm"></li>
                    ))}
                  </ul>
                </div>
              )
            }
            return <div className="mt-2 text-sm">No search results found.</div>
          }}
        </Api>
      )}
    </div>
  )
}
