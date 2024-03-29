import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/CurrentFocus.module.css'

const CurrentFocusItem = (props) => {
    return (
        <div className={styles.currentFocusContainer}>
            <Link href={props.link}>
                <a>
                    <div className={styles.imageContainer}>
                        <div
                            className={styles.image}
                            style={
                                { backgroundImage: 'url(' + props.img  + ')'}}>
                        </div>
                    </div>
                </a>
            </Link>
            <h3 className={styles.headerFocus}>{props.header}</h3>
            <div className={styles.metaContainer}>
                <span className={styles.role}>{props.role}</span>
                <span className={styles.timeslot}>{props.timeslot}</span>
            </div>
            <p className={styles.text}>
                {props.text}
            </p>
            <div className={styles.linkContent}>
                <Link href={props.link}>
                    <a className={styles.link}>
                        <span>Read more</span>
                        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} className={styles.icon} />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CurrentFocusItem
