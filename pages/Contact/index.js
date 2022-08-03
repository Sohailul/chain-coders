import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import GetInTouch from "./components/GetInTouch";

const Contact = () => {
  return (
    <div className="bg-gray-800">
        <Head>
        <title>Chain Coders | Contact Us</title>
        <meta name="description" content="Chain Coders- Providing Reliable Tech Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <main>
        <Banner/>
        <GetInTouch/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
export default Contact;
