import React, { useState } from "react"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

export default function Index() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  })
  const [isMessageSent, setIsMessageSent] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsMessageSent(true)

    // Reset the message after 3 seconds
    setTimeout(() => {
      setIsMessageSent(false)
    }, 3000)
    alert("Your message has been sent!")
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-50 pb-5">
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-lg font-medium text-gray-700">
          Have questions or feedback? Feel free to reach out!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-16 p-4 bg-gray-100 rounded-lg">
        <div className="bg-EBuyYellow rounded-lg shadow-md p-6 mb-6 lg:mr-6 lg:w-1/3">
          <h2 className="text-3xl font-semibold mb-4 text-EBuyDarkGray">
            Contact Information
          </h2>
          <p className="text-xl text-EBuyDarkGray mb-6">Chat with us now!</p>
          <p className="text-md font-semibold text-EBuyDarkGray flex items-center mb-8">
            <FiPhone size={25} color="#3FDEFF" className="mr-2" />
            +21312 3456 789
          </p>
          <p className="text-md font-semibold text-EBuyDarkGray flex items-center mb-8">
            <FiMail size={25} color="#3FDEFF" className="mr-2" />
            contact@ebuy.com
          </p>
          <p className="text-md font-semibold text-EBuyDarkGray flex items-center">
            <FiMapPin size={25} color="#3FDEFF" className="mr-2" />
            132 Dartmouth Street, Algiers, 02156, Algeria
          </p>
        </div>

        <div className="lg:w-2/3 flex flex-col">
          <form className="flex flex-wrap lg:gap-8" onSubmit={handleFormSubmit}>
            <div className="mb-4 lg:col-span-1">
              <label
                htmlFor="firstName"
                className="text-lg font-semibold text-EBuyDarkGray"
              >
                First Name
                <input
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  className="w-full border-b border-gray-400 py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
                />
              </label>
            </div>
            <div className="mb-4 lg:col-span-1">
              <label
                htmlFor="lastName"
                className="text-lg font-semibold text-EBuyDarkGray"
              >
                Last Name
                <input
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  className="w-full border-b border-gray-400 py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-EBuyDarkGray"
              >
                Email
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  className="w-full border-b border-gray-400 py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="text-lg font-semibold text-EBuyDarkGray"
              >
                Phone Number
                <input
                  placeholder="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  className="w-full border-b border-gray-400 py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
                />
              </label>
            </div>
            <div className="mb-4 col-span-2">
              <label
                htmlFor="message"
                className="text-lg font-semibold text-EBuyDarkGray"
              >
                Message
                <textarea
                  placeholder="Write your message here.."
                  id="message"
                  className="w-full border-b border-gray-400 py-2 px-3 text-gray-700 focus:outline-none focus:border-black h-12 resize-none"
                />
              </label>
            </div>
          </form>
          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-EBuyDarkGray w-1/4 h-12 text-white font-semibold rounded-lg hover:bg-EBuyGray focus:outline-none focus:bg-black"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
