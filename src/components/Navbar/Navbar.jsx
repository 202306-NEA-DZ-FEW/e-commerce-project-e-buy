import React from "react"
import logo from "../../images/logo.svg"
import Image from "next/image"
import Filter from "../Filter/Filter"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center p-5 bg-white text-gray-800 shadow-md relative">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} width={78} height={78} alt="logo image" />
        </Link>
      </div>

      {/* Links in the center */}
      <div className="flex-grow flex justify-center space-x-8 font-light text-gray-800 tracking-wider">
        <Link href="/">
          <span className="cursor-pointer hover:text-gray-400">Home</span>
        </Link>
        <Link href="/products">
          <span className="cursor-pointer hover:text-gray-400">Shop</span>
        </Link>
        <span className="cursor-pointer hover:text-gray-400">Contact</span>
      </div>

      {/* Filter on the right */}
      <Filter />
    </nav>
  )
}

export default Navbar
