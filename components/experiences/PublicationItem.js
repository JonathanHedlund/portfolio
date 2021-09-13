import Link from 'next/link'

import styles from '../../styles/Experience.module.css'

const PublicationItem = (props) => {
    return (
        <a href={props.link} className={styles.itemContainer} target="_blank">
            <div className={styles.publicationInformation}>
                <h3 className={styles.itemHeader}>{props.header}</h3>
                <p className={styles.itemRole}>{props.role}</p>
            </div>
        </a>
    )
}

export default PublicationItem
