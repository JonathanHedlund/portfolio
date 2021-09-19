import styles from '../../styles/Portfolio.module.css'

const PortfolioText = ({link}) => {
    return (
        <a href={link} target="_blank" className={styles.portfolioLink}>
            <div className={styles.portfolioLinkContainer}>
                    {link}
            </div>
        </a>

    )
}

export default PortfolioText
