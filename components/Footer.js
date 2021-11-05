import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <a href="https://github.com/JonathanHedlund/portfolio" target="_blank" className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
                <FontAwesomeIcon icon={['fab', 'github']} className={styles.footerIcon} />
                <span className={styles.footerText}>Curious about the code? Check it out at Github!</span> 
            </div>
        </a>
    )
}

export default Footer
