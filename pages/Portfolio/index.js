import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Projects from "./components/portfolio";

const Portfolio = () => {
  return (
    <div>
        <Head>
        <title>Chain Coders | Portfolio</title>
        <meta name="description" content="Chain Coders- Providing Reliable Tech Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <main>
        <Banner/>
        <Projects/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
export default Portfolio;
