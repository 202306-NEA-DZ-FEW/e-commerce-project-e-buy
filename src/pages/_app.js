import Navbar from "@/components/Navbar/Navbar"
import "@/styles/globals.css"
import { store } from "../Redux/Store"
import { Provider } from "react-redux"
import Api from "../util/api"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Api />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
