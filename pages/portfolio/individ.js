import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const individ = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/striden.png"
                experienceType="PROJECT"
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
                    <PortfolioText text="I joined IndivID in January 2018 and stayed as an active member 
                    throughout the remainder of my studies. IndivID is like a small family inside of the
                    Interaction & Design program. The group consists of students at the program who want to
                    create a fun and welcoming environment for the whole program. The members of IndivID have
                    been some of my closest friends during my time at Umeå University, and I'm incredibly
                    happy that I chose to join and be a part of it."/>
                    <PortfolioText text="From September 2018 to October 2019 I was the chairman of the 
                    organization alongside Dardan Dauti who acted as vice-chairman. We were in charge of
                    making sure everything went according to plan and all the other various responsibilities."/>
                </div>
            </div>
        </div>
    )
}

export default individ
