import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const uminovainnovation = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/uminova-banner.jpeg"
                experienceType="EXPERIENCE"
                header="Uminova Innovation"
                role="Student communicator"
                timeframe="February 2020 - April 2021"
                text="Uminova Innovation is one of Sweden’s foremost business incubators and is a catalyst 
                for growth in northern Sweden. I worked at Uminova Innovation as a student communicator
                where I got the opportunity to organize events, write articles, and use my knowledge of web 
                development to consult start-ups.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                <PortfolioTitle title="About Uminova"/>
                    <PortfolioText 
                        text="Uminova Innovation is one of Sweden’s foremost business incubators. It is a catalyst 
                        for growth in northern Sweden, and a driving force in creating the best possible conditions 
                        for innovative and scalable growth companies to reach their full potential. With business 
                        support at the forefront, Uminova Innovation help people to invest in and develop their business ideas. 
                        They accomplish this through ambitious collaborations with industry, 
                        large companies, investors, partners and their contact network of talented and skilled 
                        people." />
                    <PortfolioTitle title="How I got involved"/>
                    <PortfolioText 
                        text="Nordic.js and Nordic Design is a conference filled with talks by internationally renowned 
                        speakers and rising stars in the JavaScript and design community. I got the opportunity
                        work as a volunteer at this event in 2019 together with Confetti who is in charge of
                        organizing this event." />
                    <PortfolioTitle title="My experience"/>
                    <PortfolioText 
                        text="Nordic.js and Nordic Design is a conference filled with talks by internationally renowned 
                        speakers and rising stars in the JavaScript and design community. I got the opportunity
                        work as a volunteer at this event in 2019 together with Confetti who is in charge of
                        organizing this event." />
                </div>
            </div>
        </div>
    )
}

export default uminovainnovation
