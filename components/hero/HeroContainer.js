import HeroIconLink from './HeroIconLink'

import styles from '../../styles/Hero.module.css'

const HeroContainer = () => {
    return (
        <div className={styles.heroContainer}>
            <span className={styles.welcomeText}>Welcome to my portfolio!</span>
            <h1 className={styles.nameText}>Jonathan Hedlund</h1>
            <div className={`btn ${styles.contactButton}`} onClick={() => window.scrollTo(120,document.body.scrollHeight)}>
                Get in touch
            </div>
            <div className={styles.heroLinkContainer}>
                <HeroIconLink text="Email" icon={"envelope"} iconType="far" link="mailto:jonathan.hedlund.371@gmail.com"/>
                <HeroIconLink text="LinkedIn" icon={"linkedin"} iconType="fab" link="https://www.linkedin.com/in/jonathanhedlund/"/>
                <HeroIconLink text="Bookshelf" icon={"book"} iconType="fas" link="https://www.goodreads.com/user/show/89568653-jonathan-hedlund"/>
            </div>
        </div>
    )
}


export default HeroContainer
