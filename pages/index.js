import Head from 'next/head'
import Image from 'next/image'

import HeaderNav from '../components/HeaderNav'
import HeroContainer from '../components/hero/HeroContainer'
import CurrentFocusContainer from '../components/current-focus/CurrentFocusContainer'
import PreviousWorkContainer from '../components/previous-work/PreviousWorkContainer'
import AboutHomeContainer from '../components/about-home/AboutHomeContainer'
import ExperienceCollection from '../components/experiences/ExperienceCollection'
import ContactFormContainer from '../components/contact/ContactFormContainer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <HeroContainer />
      <CurrentFocusContainer />
      <PreviousWorkContainer />
      <AboutHomeContainer />
      <ExperienceCollection />
      <ContactFormContainer />
    </div>
  )
}
