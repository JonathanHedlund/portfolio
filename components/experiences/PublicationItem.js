import styles from '../../styles/Experience.module.css'

const PublicationItem = (props) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.publicationInformation}>
                <h3 className={styles.itemHeader}>{props.header}</h3>
                <p className={styles.itemRole}>{props.role}</p>
            </div>
        </div>
    )
}

export default PublicationItem
