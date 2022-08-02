import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/Banner'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

export default function Home() {
  return (
    <div className='bg-[#111827]'>
      <Head>
        <title>Chain Coders</title>
        <meta name="description" content="Chain Coders- Providing Reliable Tech Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <Banner/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
