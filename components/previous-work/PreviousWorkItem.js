import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/PreviousWork.module.css'

const PreviousWorkItem = (props) => {
    return (
        <Link href={props.link}>
            <a className={styles.previousWorkLink}>
                <div className={props.flip ? styles.previousItemContainerFlipped : styles.previousItemContainer}>
                    <div className={props.flip ? styles.previousItemImageFlipped : styles.previousItemImage} style={
                        { backgroundImage: 'url(' + props.img + ')'}} />
                    <div className={styles.previousItemInformation}>
                        <h3 className={styles.headerItem}>{props.header}</h3>
                        <div className={styles.tagAndTimeContainer}>
                            <p className={styles.tags}>{props.tags}</p>
                            <p className={styles.timeslot}>{props.timeslot}</p>
                        </div>
                        <p className={styles.text}>{props.text}</p>
                        <p className={styles.textMobile}>{props.textMobile}</p>
                        <Link href="">
                            <a className={styles.link}>
                                <span>Read more</span>
                                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} className={styles.icon} />
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default PreviousWorkItem
