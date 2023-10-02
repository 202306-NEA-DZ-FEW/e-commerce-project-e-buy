import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import PreviewCard from "@/components/Cards/PreviewCard"
import "@/styles/globals.css"
import Link from "next/link"
import { useRouter } from "next/router"

import { StoreProvider } from "@/redux/StoreProvider"
import { useEffect } from "react"

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <div className="bg-gray-50">
        <Navbar />

        {/* Main content */}
        <div>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </StoreProvider>
  )
}

export default App
