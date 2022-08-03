import Head from 'next/head'
import Banner from './components/Banner'
import Services from './Services'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import ChooseUs from './components/ChooseUs'
import Technology from './components/Technology'
import AboutUs from './components/AboutUs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chain Coders</title>
        <meta name="description" content="Chain Coders- Providing Reliable Tech Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <Banner/>
        <AboutUs/>
        <ChooseUs/>
        <Services/>
        <Technology/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
