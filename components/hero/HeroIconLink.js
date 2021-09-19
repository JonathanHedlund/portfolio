import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Hero.module.css'

const HeroIconLink = (props) => {
    return (
        <a href={props.link} target="_blank" className={styles.heroIconContainer}>
            <FontAwesomeIcon icon={[props.iconType, props.icon]} className={styles.icon} />
            <p className={styles.iconText}>{props.text}</p> 
        </a>
    )
}

export default HeroIconLink
