import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Portfolio.module.css'

const PortfolioHeader = ({children, img, experienceType, header, text, role, timeframe}) => {
    return (
        <>
            <div className={styles.portfolioHeaderBackground} style={
                { backgroundImage: 'url(' + img + ')'}}></div>
            <div className={styles.portfolioHeaderContainer}>
                <div className={styles.portfolioHeaderContainerInner}>
                    {children}
                </div>
            </div>
            <div className={styles.portfolioHeaderInfoContainer}>
                <Link href="/portfolio">
                    <a className={styles.backContainer}>
                        <FontAwesomeIcon icon={['fas', 'chevron-left']} className={styles.icon} />
                        <span className={styles.backContainerText}>Back</span>
                    </a>
                </Link>
                <div className={styles.portfolioHeaderInfoContainerInner}>
                    <div className={styles.portfolioHeaderInfoContainerInnerContent}>
                        <span className={styles.headerInfoType}>{experienceType}</span>
                        <h2 className={styles.headerInfoHeader}>{header}</h2>
                        <p className={styles.headerInfoText}>
                            {text}
                        </p>
                        <div className={styles.headerInfoMetaContainer}>
                            <div className={styles.headerInfoRole}>
                                <span className={styles.headerInfoMetaType}>Role</span>
                                <p className={styles.headerInfoMetaText}>{role}</p>
                            </div>
                            <div className={styles.headerInfoTimeFrame}>
                                <span className={styles.headerInfoMetaType}>Timeframe</span>
                                <p className={styles.headerInfoMetaText}>{timeframe}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioHeader
