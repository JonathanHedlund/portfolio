import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const nordic = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/splick.png"
                experienceType="PROJECT"
                header="Nordic JS & Nordic Design"
                role="Attendees - Team Lead"
                timeframe="September 2019"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque 
                    penatibus et magnis dis parturient montes, nascetur.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>

                </div>
            </div>
        </div>
    )
}


export default nordic
