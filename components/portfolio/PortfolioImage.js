import styles from '../../styles/Portfolio.module.css'

const PortfolioImage = ({img}) => {
    return (
        <img src={img} alt="" className={styles.portfolioImage}/>
    )
}

export default PortfolioImage
