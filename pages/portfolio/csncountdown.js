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
                link="https://csncountdown.se"
                linkName="View the website"
                text="CSN Countdown is a website students can go to whenever they're wondering when the next
                CSN payout will be. The site displays a countdown until the due date with a little suprise
                confetti party when the day has come. I created this website as part of a course where I 
                had free reign of choice related to what kind of project I wanted to do.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="Why did I make this site?" />
                    <PortfolioText text='Every day, students all over Sweden have a recurring question 
                    "When will CSN come?". The goal of this project has been to answer this very question so 
                    that all students can sleep peacefully. The plan was to create a page that counts down to 
                    the next CSN, and display how much money a full-time student can expect.' />
                    <PortfolioLink link="https://csncountdown.se" linkName="Check out the website by clicking here!"/>
                    <PortfolioImage img="/csn-wait.png" />
                    <PortfolioTitle title="What I learned" />
                    <PortfolioText text='This project has been extremely rewarding for my maturing as a developer. 
                    The project has been challenging and exciting as I set out to learn many new technologies, 
                    such as React, Github Pages, use my own domain and implement APIs from the web.' />
                    <PortfolioText text='CSN Countdown is a project that I have been thinking about doing for a 
                    long time and realized that this part of the course will be a perfect opportunity for me to 
                    develop this service. React is a tool that I have long wanted to learn, this project has given
                    me a deeper understanding of how components are used to divide complex systems into smaller 
                    pieces. I have realized that Github Pages works perfectly for posting small projects online so 
                    that it is easier to spread what you do to the world, I also used it when I uploaded my first web 
                    portfolio. It has been interesting to learn more about domains, from buying to posting a 
                    website there. I had no idea how to implement an API from the web, at first I thought it 
                    would be a very complicated process but was pleasantly surprised at how easy it was.' />
                    <PortfolioText text='Of all the projects I had done prior to this one, I think this is the one 
                    that has developed my skills the most. Do you think you are doing the right thing in giving the 
                    student a chance to develop something you yourself are interested in.' />
                    <PortfolioImage img="/csn-time.png" />
                </div>
            </div>
        </div>
    )
}

export default csncountdown
