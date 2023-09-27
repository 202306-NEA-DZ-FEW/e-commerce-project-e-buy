import React from "react"
import logo from "../../images/logo.svg"
import Image from "next/image"
import { BsSearchHeart } from "react-icons/bs"
import Filter from "../Filter/Filter"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white text-gray-800 shadow-md">
      <div className="flex items-center max-full w-full">
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
        <Filter />
      </div>
    </nav>
  )
}

export default Navbar
