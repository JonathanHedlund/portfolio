import styles from '../../styles/Portfolio.module.css'

const PortfolioImageVertical = ({img}) => {
    return (
        <div className={styles.portfolioImageVerticalContainer}>
            <img src={img} alt="" className={styles.portfolioImageVertical}/>
        </div>
    )
}

export default PortfolioImageVertical
