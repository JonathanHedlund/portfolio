import HeaderNav from '../components/HeaderNav'
import HeroContainer from '../components/hero/HeroContainer'
import CurrentFocusContainer from '../components/current-focus/CurrentFocusContainer'
import PreviousWorkContainer from '../components/previous-work/PreviousWorkContainer'
import AboutHomeContainer from '../components/about-home/AboutHomeContainer'
import ExperienceCollectionHome from '../components/experiences/ExperienceCollectionHome'
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
      <ExperienceCollectionHome />
      <ContactFormContainer />
    </div>
  )
}
