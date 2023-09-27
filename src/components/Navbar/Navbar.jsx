import React from "react"
import logo from "../../images/logo.svg"
import Image from "next/image"
import { BsSearchHeart } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-white text-gray-800 shadow-md flex-grow">
      <div className="flex items-center max-w-full w-full">
        <div className="flex justify-start">
          <a href="#">
            <Image src={logo} width={78} height={78} alt="logo image" />
          </a>
        </div>
        <ul className="flex items-center flex-grow justify-center space-x-12 font-light text-gray-800 tracking-wider">
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
        <div className="flex justify-end relative pl-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-200 px-3 py-2 rounded-md text-sm outline-none w-40 sm:w-38"
          />
          <BsSearchHeart className=" text-gray-400 absolute top-3 mr-2" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
