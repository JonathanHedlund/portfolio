import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const nordic = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/nordic-group.jpeg"
                experienceType="PROJECT"
                header="Nordic JS & Nordic Design"
                role="Attendees - Team Lead"
                timeframe="September 2019"
                text="Nordic.js and Nordic Design is a conference filled with talks by internationally renowned 
                speakers and rising stars in the JavaScript and design community. I got the opportunity
                work as a volunteer at this event in 2019 together with Confetti who is in charge of
                organizing this event.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="About the event"/>
                    <PortfolioText 
                        text="Nordic.js and Nordic Design is a conference filled with talks by internationally renowned 
                        speakers and rising stars in the JavaScript and design community. I got the opportunity
                        work as a volunteer at this event in 2019 together with Confetti who is in charge of
                        organizing this event." />
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


export default nordic
