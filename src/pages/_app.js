import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import "@/styles/globals.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
