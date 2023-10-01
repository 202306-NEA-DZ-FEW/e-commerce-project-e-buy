import React from "react"
import bannerC from "../../../public/bannerC.jpg"
import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="bannerC.jpg"
        alt="Banner"
        className="object-cover w-full h-96 rounded-md"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-start text-gray-50 p-4">
        <button className=" text-center text-5xl font-bold inline-block sm:block px-4 py-2 bg-gray-600 rounded ">
          Our products
        </button>
      </div>
    </div>
  )
}

export default Banner
