import styles from '../../styles/AboutHome.module.css'

const AboutHomeText = ({text}) => {
    return (
        <p className={styles.aboutHomeText}>
            { text }
        </p>
    )
}

export default AboutHomeText
