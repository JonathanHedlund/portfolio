import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const arboreal = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/arboreal-show-case.png"
                experienceType="Project"
                header="Arboreal"
                role="School project"
                timeframe="January 2019 - May 2019"
                text="Forest measurements with your mobile phone. Arboreal uses AR technology to transform 
                    the forest into a digital variant where you can perform measurements in real time. 
                    As a part of a school project, I worked alongside four others to help the start-up company 
                    Arboreal design a prototype of the full user flow for their service through a 
                    process called Design Build Test (DBT).">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>

                </div>
            </div>
        </div>
    )
}

export default arboreal
