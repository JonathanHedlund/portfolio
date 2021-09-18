import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const individ = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img=""
                experienceType="Experience"
                header="IndivID"
                role="Chairman"
                timeframe="September 2018 - Oktober 2019"
                text="IndivID is the club entertainment committee for the M.Sc.Eng in Interaction and Design 
                students at Umeå University. IndivID arranges a wide variety of events during the school year to 
                bring the program closer together. Averaging about one event every month, students get plenty of 
                chances to get to know their classmates and upper/lower classmates even better by participating in 
                the activities. The members of indivID in charge of planning and executing are also students of the 
                program.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                
                </div>
            </div>
        </div>
    )
}

export default individ
