import HeaderNav from '../components/HeaderNav'
import AboutContainer from '../components/about-home/AboutContainer'
import ContactFormContainer from '../components/contact/ContactFormContainer'

import styles from '../styles/Home.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <HeaderNav />
            <AboutContainer />
            <ContactFormContainer />
        </div>
    )
}

export default about
