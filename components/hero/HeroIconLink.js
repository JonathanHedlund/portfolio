import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Hero.module.css'

const HeroIconLink = (props) => {
    return (
        <div className={styles.heroIconContainer}>
            <FontAwesomeIcon icon={[props.iconType, props.icon]} className={styles.icon} />
            <p className={styles.iconText}>{props.text}</p> 
        </div>
    )
}

export default HeroIconLink
