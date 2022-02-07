import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const csncountdown = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/csn-time.png"
                experienceType="PROJECT"
                header="CSN Countdown"
                role="Creator"
                timeframe="April 2019 - June 2019"
                text="CSN Countdown is a website students can go to whenever they're wondering when the next
                CSN payout will be. The site displays a countdown until the due date with a little surprise
                confetti party when the day has come. I created this website as part of a course where I 
                had free reign of choice related to what kind of project I wanted to do.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="Why did I make this site?" />
                    <PortfolioText text='Every day, students all over Sweden have a recurring question 
                    "When will CSN come?". The goal of this project was to answer this very question so 
                    that students across Sweden can sleep peacefully. The plan was to create a page that 
                    counts down to the next CSN, and display how much money a full-time student can expect.' />
                    <PortfolioImage img="/csn-wait.png" />
                    <PortfolioTitle title="What I learned" />
                    <PortfolioText text='This project was extremely rewarding for my maturing as a developer. 
                    The project was challenging and exciting as I set out to learn many new technologies, 
                    such as React, Github Pages, use my own domain and implement APIs from the web.' />
                    <PortfolioText text='CSN Countdown is a project that I had been thinking about doing for a 
                    long time and realized that this part of the course will be a perfect opportunity for me to 
                    develop this service. React is a tool that I wanted to learn, and this project gave
                    me a deeper understanding of how components are used to divide complex systems into smaller 
                    pieces. Github Pages worked perfectly for posting this small project. I also used it when I 
                    uploaded my first web portfolio. It was interesting to learn more about domains, from 
                    buying one to posting a website on it. I had no prior knowledge regarding the implementation of an 
                    API from the web, at first, I thought it would be a very complicated process but was 
                    pleasantly surprised at how easy it was.' />
                    <PortfolioImage img="/csn-time.png" />
                </div>
            </div>
        </div>
    )
}

export default csncountdown
