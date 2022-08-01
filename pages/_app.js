import '../styles/globals.css'
import Navbar from "./components/Web/Navbar/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Navbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
