import Link from 'next/link'

import styles from '../../styles/CurrentFocus.module.css'

const CurrentFocusItem = (props) => {
    return (
        <div className={styles.currentFocusContainer}>
            <div 
            className={styles.image}
            style={
                { backgroundImage: 'url(' + props.img  + ')'}}></div>
            <h3 className={styles.headerFocus}>{props.header}</h3>
            <div className={styles.metaContainer}>
                <span className={styles.role}>{props.role}</span>
                <span className={styles.timeslot}>{props.timeslot}</span>
            </div>
            <p className={styles.text}>
                {props.text}
            </p>
            <Link href="">
                <a className={styles.readMoreLink}>
                    Read more
                </a>
            </Link>
        </div>
    )
}

export default CurrentFocusItem
