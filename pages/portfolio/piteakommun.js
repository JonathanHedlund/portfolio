import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const piteakommun = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img=""
                experienceType="Experience"
                header="Piteå kommun"
                role="Supervisor at Ung i Piteå"
                timeframe="June 2016 - September 2018"
                text="During the summer of 2016, 2017 and 2018 I worked as a supervisor for Piteå Kommun in an 
                    organization called Balkongprojektet. Balkongprojektet arranges a variation of activities for 
                    the youth in Piteå. The purpose of the organization is to engage the young people through different 
                    kinds of activities. As a supervisor, I have gained knowledge and experience in running an 
                    organization and leading about 90 employees in total throughout the summers.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>

                </div>
            </div>
        </div>
    )
}

export default piteakommun
