import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const piteakommun = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/pitea.jpeg"
                experienceType="EXPERIENCE"
                header="Piteå kommun"
                role="Supervisor at Ung i Piteå"
                timeframe="June 2016 - September 2018"
                text="During the summer of 2016, 2017, and 2018 I worked as a supervisor for Piteå Kommun in an 
                    organization called Balkongprojektet. Balkongprojektet arranges a variation of activities for 
                    the youth in Piteå. The purpose of the organization is to engage the young people through different 
                    kinds of activities. As a supervisor, I have gained knowledge and experience in running an 
                    organization and leading about 90 employees in total throughout the summers.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText 
                        text="Balkongprojektet is a great way for the youth in Piteå to get out and partake in
                        activities where they can have fun and be themselves. Balkongprojectet wants to reach 
                        young people where they actually are - on the beach, at the cinema, in town, or on the 
                        football field. In short, events are organized by young people for young people."/>
                    <PortfolioText 
                        text="The group organizing these events consists of two supervisors as well as 10 employees 
                        who applied for summer jobs through the municipality, where the 10 employees work for a 
                        three-week period until 10 new come in, with a total of three periods during the whole summer.
                        The group works together to plan, prepare, and carry out events aimed at the ages of 
                        13-25 years. All events are free to attend and can consist of everything from volleyball 
                        tournaments, mini golf, cinema evenings, treasure hunts, soap football, and 
                        outdoor swimming in the evening sun."/>
                    <PortfolioText 
                        text="I worked as one of the supervisors for the organization during the summer of 2016, 
                        2017, and 2018. It was some of the most fun and rewarding work I have ever done. 
                        It was always a blast coming to work and I enjoyed every second of it. Throughout the
                        summers I've supervised 90 employees, organized over 100 events averaging about 50
                        attendees each event during my time at Balkongprojektet. It's given me valuable knowledge
                        and experience in project management and leadership."/>
                    <PortfolioText 
                        text="The image below is of one of the project groups from the summer of 2019."/>
                    <PortfolioImage 
                        img="/balkonggroup.jpeg"/>
                </div>
            </div>
        </div>
    )
}

export default piteakommun
