import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import "@/styles/globals.css"

import { StoreProvider } from "@/redux/StoreProvider"

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <div className="bg-gray-50">
        <Navbar />

        {/* Main content */}
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </StoreProvider>
  )
}

export default App
