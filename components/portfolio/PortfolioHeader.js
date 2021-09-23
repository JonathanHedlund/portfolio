import Link from 'next/link'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Portfolio.module.css'

const PortfolioHeader = ({children, img, experienceType, header, text, role, timeframe, link}) => {
    const router = useRouter()

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
                <div className={styles.backContainer} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={['fas', 'chevron-left']} className={styles.icon} />
                    <span className={styles.backContainerText}>Back</span>
                </div>
                <div className={styles.portfolioHeaderInfoContainerInner}>
                    <div className={styles.portfolioHeaderInfoContainerInnerContent}>
                        <span className={styles.headerInfoType}>{experienceType}</span>
                        <h2 className={styles.headerInfoHeader}>{header}</h2>
                        <p className={styles.headerInfoText}>
                            {text}
                        </p>
                        <div className={styles.headerInfoMetaContainer}>
                            <div className={styles.headerInfoRole}>
                                <span className={styles.headerInfoMetaType}>ROLE</span>
                                <p className={styles.headerInfoMetaText}>{role}</p>
                            </div>
                            <div className={styles.headerInfoTimeFrame}>
                                <span className={styles.headerInfoMetaType}>TIMEFRAME</span>
                                <p className={styles.headerInfoMetaText}>{timeframe}</p>
                            </div>
                        </div>
                        {link && 
                        <div className={styles.headerInfoTimeFrame}>
                            <span className={styles.headerInfoMetaType}>LINK</span>
                            <a href={link}>
                                <p className={styles.headerInfoMetaText}>{link}</p>
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioHeader
