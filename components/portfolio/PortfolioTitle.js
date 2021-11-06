import styles from '../../styles/Portfolio.module.css'

const PortfolioTitle = ({title}) => {
    return (
        <div className={styles.portfolioTitleContainer}>
            <h3 className={styles.portfolioTitle}>{title}</h3>
        </div>
    )
}

export default PortfolioTitle
