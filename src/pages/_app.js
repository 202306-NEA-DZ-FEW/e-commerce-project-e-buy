import Navbar from "@/components/Navbar/Navbar"
import "@/styles/globals.css"
import { store } from "../Redux/Store"
import { Provider } from "react-redux"
import Api from "../util/api"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        {/* <Api apiRoute="products" /> */}
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
