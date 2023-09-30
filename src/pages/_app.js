import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import "@/styles/globals.css"

import { StoreProvider } from "@/redux/StoreProvider"

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </StoreProvider>
  )
}
