import Head from 'next/head'
import Image from 'next/image'

//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);

import Footer from '../components/Footer.js'


import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="description" 
          content="The web portfolio for Jonathan Hedlund showcasing all work experience, projects, and
          education." />
        <meta name="title" property="og:title" content="Jonathan Hedlund" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="/portfolio-image.png" />
        <meta name="description" property="og:description" content="The web portfolio for Jonathan Hedlund showcasing all work experience, projects, and
          education." />
        <meta name="author" content="Jonathan Hedlund" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.pageContent}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
