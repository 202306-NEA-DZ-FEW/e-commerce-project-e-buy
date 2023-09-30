import React from "react"
import logo from "../../images/logo.svg"
import Image from "next/image"
import Filter from "../Filter/Filter"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-white text-gray-800 shadow-md flex-col">
      <div className="flex items-center w-full justify-between">
        <div className="flex-shrink-0 mr-4">
          <Link href="/">
            <h1>
              <Image src={logo} width={78} height={78} alt="logo image" />
            </h1>
          </Link>
        </div>
        <div className="flex flex-grow justify-center sm:justify-start items-center space-x-8 md:space-x-12 font-light text-gray-800 tracking-wider">
          <Link href="/">
            <h1 className="hover:text-gray-400">Home</h1>
          </Link>
          <Link href="/products">
            <h1 className="hover:text-gray-400">Shop</h1>
          </Link>
          <h1 className="hover:text-gray-400">Contact</h1>
        </div>
      </div>
      <Filter />
    </nav>
  )
}

export default Navbar
