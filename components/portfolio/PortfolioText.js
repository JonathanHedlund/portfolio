import styles from '../../styles/Portfolio.module.css'

const PortfolioText = ({text}) => {
    return (
        <p className={styles.portfolioText}>
            {text}
        </p>
    )
}

export default PortfolioText
