import { addToCart, removeFromCart } from "@/redux/slices/CartSlice"

import { useDispatch, useSelector } from "react-redux"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

// using dynamic to disble ssr
const TotalPrice = dynamic(() => import("@/components/PriceInfo/TotalPrice"), {
  ssr: false,
})
const Item = dynamic(() => import("@/components/SingleCartItem/Item"), {
  ssr: false,
})

const Index = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { cartItems } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <div className="h-full w-full container mx-auto mb-10">
      <h1 className="my-7 text-center text-2xl ">Cart Items</h1>
      {cartItems.length > 0 && isClient ? (
        <div className="mx-auto max-w-full justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                discount={item.discount}
                category={item.category}
                stock={item.stock}
                thumbnail={item.images[0]}
                itemQty={item.qty ? item.qty : 1}
                addToCartHandler={(qty) => addToCartHandler(item, qty)}
                removeFromCartHandler={() => removeFromCartHandler(item.id)}
              />
            ))}
          </div>

          <TotalPrice />
        </div>
      ) : (
        <div className="text-center">
          <Image
            src="empty-cart.svg"
            height={300}
            width={300}
            className="mx-auto mb-7"
            alt="empty cart image"
          />
          <h3 className="text-base font-light mb-5">
            No items in cart 🛒 please add items
          </h3>
          <Link
            href="/products"
            className="mt-5 flex-1 px-6 py-2 font-semibold select-none rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300"
          >
            go to products
          </Link>
        </div>
      )}
    </div>
  )
}

export default Index
