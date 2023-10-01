import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const PreviewCard = ({ images }) => {
  return (
    <div className="relative max-w-full max-h-300px mx-auto">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className="max-h-300px"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </Carousel>
      <button className="absolute bottom-60 left-1/3 transform -translate-x-1/2 bg-blue-500 text-white px-10 py-3 rounded">
        More
      </button>
    </div>
  )
}

export default PreviewCard
