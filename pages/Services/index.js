import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/shared/Navbar";
import Service from "./components/Service";
import Footer from "../components/shared/Footer";

const Services = () => {
  return (
    <div>
        <Head>
        <title>Chain Coders | Services</title>
        <meta name="description" content="Chain Coders- Providing Reliable Tech Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <main>
        <Banner/>
        <Service/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
export default Services;
