import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="flex items-center p-5 bg-white text-gray-800 shadow-md relative">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="logo image"
            className="w-14 cursor-pointer"
          />
        </Link>
      </div>

      {/* Links in the center */}
      <div className="flex-grow flex justify-center space-x-8 font-light text-gray-800 tracking-wider">
        <Link href="/">
          <span
            className={`cursor-pointer hover:text-orange-500 ${
              router.pathname === "/" ? "text-orange-500" : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/products">
          <span
            className={`cursor-pointer hover:text-green-500 ${
              router.pathname === "/products" ? "text-green-500" : ""
            }`}
          >
            Shop
          </span>
        </Link>
        <span className="cursor-pointer hover:text-yellow-500">Contact</span>
      </div>

      {/* Cart Icon and Button */}
      <Link href="/cart">
        <div className="relative cursor-pointer">
          <div className="text-gray-800 hover:text-orange-500">
            <FaShoppingCart className="h-6 w-6" />
          </div>
          <button className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs hidden group-hover:block">
            Cart
          </button>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar
