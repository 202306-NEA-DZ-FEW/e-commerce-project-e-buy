import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import PreviewCard from "@/components/Cards/PreviewCard"
import "@/styles/globals.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
