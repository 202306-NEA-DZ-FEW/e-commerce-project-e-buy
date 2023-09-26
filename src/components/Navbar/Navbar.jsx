import React from "react"
import logo from "../../images/logo.svg"
import Image from "next/image"
import { BsSearchHeart } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white text-gray-800 shadow-md">
      <div className="flex items-center max-w-7xl w-full">
        <div className="flex-shrink-0 mr-8">
          <a href="#">
            <Image src={logo} width={78} height={78} alt="logo image" />
          </a>
        </div>
        <ul className="flex justify-center flex-grow space-x-12 font-light text-gray-800 tracking-wider">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Clothes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Electronics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Furniture
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Others
            </a>
          </li>
        </ul>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-200 px-3 py-2 rounded-md text-sm outline-none w-40 sm:w-48"
          />
          <BsSearchHeart className=" text-gray-400 absolute right-3 top-3" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
