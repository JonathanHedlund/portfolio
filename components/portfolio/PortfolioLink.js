import styles from '../../styles/Portfolio.module.css'

const PortfolioText = ({link}) => {
    return (
        <a href="" target="_blank" className={styles.portfolioLink}>
            <div className={styles.portfolioLinkContainer}>
                    {link}
            </div>
        </a>

    )
}

export default PortfolioText
