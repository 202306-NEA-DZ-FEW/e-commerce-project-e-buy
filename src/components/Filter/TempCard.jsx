import React from "react"

const TempCard = ({ imageUrl, title, price }) => {
  return (
    <div className="max-w-sm m-5 w-60 h-80 rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-3/4" />
      <div className="px-6 py-4 flex justify-between">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  )
}

export default TempCard
