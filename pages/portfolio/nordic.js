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
                speakers and rising stars in the JavaScript and design community. I got the opportunity to
                work as a volunteer at this event in 2019 together with Confetti who is in charge of
                organizing this event.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="About the event"/>
                    <PortfolioText 
                        text="Nordic.js and Nordic Design is a conference filled with talks by internationally 
                        renowned speakers and rising stars in the JavaScript and design community. Where you can 
                        hear about fun experiments, learn about the latest in JavaScript, 
                        and connect with passionate developers." />
                    <PortfolioTitle title="How I got involved"/>
                    <PortfolioText 
                        text="Some of the team members behind Nordic.js and Nordic Design have their roots
                        in the Master of Science in Interaction & Design program, the same program that I
                        studied. So when they arrange their events they ask students of the program to 
                        come down to Stockholm and volunteer. I signed up to be a volunteer at the 2019 
                        iteration of the event. The volunteers are assigned different roles that come with
                        their own unique responsibilities. For example, responsible for the social media, 
                        responsible for stage & tech, and responsible for the attendees. The volunteers who 
                        are responsible for the attendees are the largest group of volunteers, in 2019 this group
                        consisted of 18 people. They make sure everything runs smoothly and goes according to 
                        plan. I was appointed team leader of this group where my responsibility was to make 
                        sure that everyone has things to do, keep order on the schedule for everything 
                        that needs to be done, and make sure that everyone is where they should be." />
                    <PortfolioTitle title="My experience"/>
                    <PortfolioText 
                        text="The event was the most fun I've ever had volunteering. Volunteering together with
                        my friends from the university made it not feel like work. I'm happy and grateful that
                        I got the opportunity to work together with the talented people at Confetti and 
                        attend my first large-scale conference. It was fun to have a bit more responsibility
                        and further improve on the aspects that come with that kind of job. Since I'm no longer
                        a student at the Master of Science program I probably won't participate as a volunteer
                        in the future but I hope I get the chance to attend it as a guest." />
                    <PortfolioImage img="/nordic-bollhav.png" />
                </div>
            </div>
        </div>
    )
}


export default nordic
