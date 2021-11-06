import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const splick = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/splick.png"
                experienceType="EXPERIENCE"
                header="Splick"
                role="Co-founder - CTO"
                timeframe="April 2020 - Current"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque 
                    penatibus et magnis dis parturient montes, nascetur.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur."/>
                    <PortfolioText text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur."/>
                    <PortfolioImage img="/splick.png"/>
                    <PortfolioText text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur."/>
                </div>
            </div>
        </div>
    )
}

export default splick
