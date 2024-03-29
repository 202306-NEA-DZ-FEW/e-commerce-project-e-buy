import React, { useState } from "react"
import logo from "../../../public/logo.svg"
import Image from "next/image"
import Filter from "../Filter/Filter"
import dynamic from "next/dynamic"
import Link from "next/link"

//import CartIcon from "../ShoppingIcon/CartIcon"

// using dynamic import to disable ssr
const CartIcon = dynamic(() => import("@/components/ShoppingIcon/CartIcon"), {
  ssr: false,
})
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="flex items-center  p-4 bg-gray-50 text-gray-800 shadow-md relative">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} width={78} height={78} alt="logo image" />
        </Link>
      </div>
      {/* Links in the center */}
      <div
        className={`${
          isMenuOpen
            ? "flex justify-center flex-grow space-x-2 text-xs pl-2"
            : "hidden"
        } lg:flex lg:justify-center lg:space-x-12 md:flex md:justify-center md:space-x-12 flex-grow lg:flex-grow md:flex-grow font-light text-gray-800 tracking-wider`}
      >
        <Link href="/">
          <span className="cursor-pointer lg:pl-28 hover:text-EBuyDeepOrange">
            Home
          </span>
        </Link>
        <Link href="/searchResult/all">
          <span className="cursor-pointer  hover:text-EBuyDeepOrange">
            Shop
          </span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer hover:text-EBuyDeepOrange">
            Contact
          </span>
        </Link>
      </div>

      <div className=" lg:hidden md:hidden pt-1.5 mr-auto ml-6">
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <svg
              Expand
              Down
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Filter on the right */}
      <div
        className={`${
          isMenuOpen ? "hidden" : "ml-auto block lg:block md:block"
        }`}
      >
        <Filter />
      </div>
      <CartIcon />
    </nav>
  )
}
export default Navbar
