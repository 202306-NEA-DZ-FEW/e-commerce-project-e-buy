import Link from "next/link"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const TotalPrice = () => {
  const { loading, taxPrice, itemsPrice, totalPrice, shippingPrice } =
    useSelector((state) => state.cart)
  /* const [totalPrice, setTotalPrice] = useState(itemsPrice)

    useEffect(() => {
        setTotalPrice(itemsPrice)

        return () => {

        }
    }, [itemsPrice]) */

  return (
    <div className=" flex justify-evenly flex-col mt-1 h-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className=" flex-grow">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700 text-xl font-medium">Subtotal</p>
          <p className="text-gray-700">{itemsPrice}</p>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700 text-base font-medium">Tax</p>
          <p className="text-gray-700">{taxPrice} $</p>
        </div>
        {console.log(useSelector((state) => state.cart))}
        <div className="flex justify-between">
          <p className="text-gray-700 text-base font-medium">Shipping</p>
          <p className="text-gray-400">
            {shippingPrice > 0 ? shippingPrice : "FREE"}
          </p>
        </div>
        <hr className="my-4" />
      </div>

      <div className="flex justify-between ">
        <p className="text-2xl font-semibold">Total</p>
        <div className="flex flex-col items-end ">
          <p className="mb-1 text-lg font-semibold">{totalPrice} $</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>

      <div>
        <Link
          href="checkout"
          className="w-full flex justify-center group relative overflow-hidden mt-6 rounded-md  py-2 font-medium bg-purple-500 text-white "
        >
          Proceed to Checkout
          <div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
        </Link>
      </div>
    </div>
  )
}

export default TotalPrice
