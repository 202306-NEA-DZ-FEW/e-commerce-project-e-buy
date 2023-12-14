import { useRouter } from "next/router"
import React, { useState } from "react"
import { BsSearchHeart } from "react-icons/bs"

export default function Filter() {
  const [data, setData] = useState(null)
  const router = useRouter()

  async function fetchData(event) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${event.target.value}`,
    )
    const jsonData = await response.json()
    setData(jsonData)
  }

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-200 px-3 py-2 rounded-md text-sm outline-none w-40 sm:w-48"
        onKeyDown={(e) => {
          if (e.keyCode == 13 && e.target.value.length > 0) {
            fetchData(e)
            router.push(`/searchResult/${e.target.value}`)
          }
        }}
      />
      <BsSearchHeart className=" text-gray-400 absolute right-3 top-3" />
    </div>
  )
}
