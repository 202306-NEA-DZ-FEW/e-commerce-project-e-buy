import React from "react"
import Item from "@/components/SingleCartItem/Item"
import Link from "next/link"

const index = () => {
  /*** Using dummy items object for now
   * untill we implement global cart state
   */
  const items = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
  ]
  return (
    <div className="h-screen w-full container mx-auto">
      <h1 className="my-7 text-center text-2xl ">Cart Items</h1>
      <div className="mx-auto max-w-full justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* signle cart items here */}

          {items.map((item) => (
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
            />
          ))}
        </div>

        {/*  total price */}
        <div className=" flex justify-evenly flex-col mt-1 h-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className=" flex-grow">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 text-xl font-medium">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 text-xl font-medium">Shipping</p>
              <p className="text-gray-400">FREE</p>
            </div>
            <hr className="my-4" />
          </div>
          <div className="flex justify-between ">
            <p className="text-2xl font-semibold">Total</p>
            <div className="flex flex-col items-end ">
              <p className="mb-1 text-lg font-semibold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>

          <div>
            <Link
              href="checkout"
              className="w-full flex justify-center group relative overflow-hidden mt-6 rounded-md  py-2 font-medium bg-purple-500 text-white "
            >
              Proceed to Check Out
              <div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
