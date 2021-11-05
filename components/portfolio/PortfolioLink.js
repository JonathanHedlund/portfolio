import styles from '../../styles/Portfolio.module.css'

const PortfolioText = ({link, linkName}) => {
    return (
        <a href={link} target="_blank" className={styles.portfolioLink}>
            <div className={styles.portfolioLinkContainer}>
                    {linkName}
            </div>
        </a>

    )
}

export default PortfolioText
