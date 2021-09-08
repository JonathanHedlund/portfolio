import HeroIconLink from './HeroIconLink'

import styles from '../../styles/Hero.module.css'

const HeroContainer = () => {
    return (
        <div className={styles.heroContainer}>
            <span className={styles.welcomeText}>Welcome to my portfolio!</span>
            <h1 className={styles.nameText}>Jonathan Hedlund</h1>
            <div className={`btn ${styles.contactButton}`}>
                Get in touch
            </div>
            <div className={styles.heroLinkContainer}>
                <HeroIconLink text="LinkedIn" icon={"linkedin"} iconType="fab"/>
                <HeroIconLink text="CV" icon={"file"} iconType="fas"/>
                <HeroIconLink text="Bookshelf" icon={"book"} iconType="fas"/>
            </div>
        </div>
    )
}


export default HeroContainer
