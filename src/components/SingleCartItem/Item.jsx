import { useState } from "react"
import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Item = ({
  title,
  description,
  price,
  rating,
  discount,
  category,
  stock,
  thumbnail,
}) => {
  const [itemCout, setItemCout] = useState(1)

  const handleSubstract = () => {
    if (itemCout == 1) return
    setItemCout((prev) => prev - 1)
  }
  const handleAdd = () => {
    setItemCout((prev) => prev + 1)
  }
  return (
    <div className="justify-between my-2 rounded-lg bg-white p-5 shadow-md sm:flex sm:justify-start">
      <Image
        src={thumbnail}
        alt={description}
        width={100}
        height={100}
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700 font-semibold">
            Price : {price} $
          </p>
          <p className="mt-1 text-xs text-gray-700">
            Available in stock : {stock}
          </p>
          <p className="mt-1 text-xs text-gray-700">Category : {category}</p>
          <p className="mt-1 text-xs text-gray-700">rating : {rating}</p>
        </div>
        <div className="mt-4 flex justify-center im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center justify-end border-gray-100">
            <span
              className="flex items-center cursor-pointer rounded-r bg-gray-100 py-1 px-2 h-8"
              onClick={handleSubstract}
            >
              {" "}
              <AiOutlineMinus />{" "}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              value={itemCout}
              min="1"
            />
            <span
              className=" flex items-center cursor-pointer rounded-r bg-gray-100 py-1 px-2 h-8"
              onClick={handleAdd}
            >
              {" "}
              <AiOutlinePlus />{" "}
            </span>
          </div>
          <div className="flex items-center mx-auto sm:justify-end">
            <button className="py-2 px-[8px] rounded-md overflow-hidden bg-red-500 inline-flex items-center group relative text-white">
              <span>Remove</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5  text-white-500 ml-2 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
