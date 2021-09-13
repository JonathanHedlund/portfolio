import Link from 'next/link'

import styles from '../../styles/Experience.module.css'

const ExperienceItem = (props) => {
    return (
        <Link href={props.link}>
            <a className={styles.itemContainer}>
                <div className={styles.itemImage} style={
                    { backgroundImage: 'url(' + props.img  + ')'}}></div>
                <div className={styles.itemInformation}>
                    <div>
                        <h3 className={styles.itemHeader}>{props.header}</h3>
                        <p className={styles.itemRole}>{props.role}</p>
                    </div>
                    <p className={styles.itemTimeslot}>{props.timeslot}</p>
                </div>
            </a>
        </Link>
    )
}

export default ExperienceItem
