import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const hobbies = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/hobbies.png"
                experienceType="Experience"
                header="Hobbies"
                role="Project"
                timeframe="August 2020 - January 2021"
                text="A service where the user can connect and communicate with others who have the same 
                    interests, and get more out of exercising their interests on their own. This service was
                    developed during a course focusing on the entire business development chain, 
                    from idea to presentation of a finished prototype and business plan.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText 
                        text='Hobbies was developed during a course at Umeå University called "Affärsmässig 
                        tjänstedesign och teknikutveckling" where the goal is to take an idea and work with it throughout 
                        the whole semester. Thus working with it from the idea phase to presentation of a finished
                        prototype and business plan. The project was developed by a classmate and I'/>
                    <PortfolioText 
                        text='Although the course started in August 2020, the idea for Hobbies dates back to January of
                        the same year when I wanted to come up with and develop an idea alongside my studies.
                        The idea came from a wish to take my interests to the next level and get more out of
                        excercising them on my own and find others (preferrably in person) who share my interest that 
                        I could connect to. Instead of continuing to develop the idea further I started working at
                        Uminova Innovation and Splick. So the idea stayed dormant until this course started up.'/>
                    <PortfolioImage img="/hobbies-2.png" />
                    <PortfolioText 
                        text='I wrote the following paragraph back in January of 2020 and it stayed as
                        our main description of our service throughout the course.'/>
                    <PortfolioText 
                        text="A service, in the form of a mobile application and a website, where the user can connect 
                        to and communicate with others who have the same interests, and get more out of exercising their 
                        interests on their own. Through the service, you can create groups within your interests together 
                        with your friends or join an open group together with people from all over the world. In these 
                        groups, you can, among other things, have discussions, ask questions, give tips and post common 
                        challenges. With the service, you can easily meet people with similar interests near you. In 
                        addition to the social part, it is also possible to have tailored goals with the aim of motivating 
                        the user to pursue their hobby. It is also possible to set your own goals or see what others have 
                        set for themselves. The service offers something for everyone; those who want to meet people in 
                        person, those who want to discuss online and for anyone who exercise the interest on their own."/>
                    <PortfolioText 
                        text='The course was divided into four workshops, all with different tasks and milestones
                        in order to get us to further develop our idea. Some of the tasks in these workshops included
                        developing a Business Model Canvas (BMC), analasys of competitors, analasys of the market, creating
                        plans for revenue streams, and creating a presentable prototype of our service.'/>
                    <PortfolioImage img="/hobbies-3.png" />
                    <PortfolioText 
                        text="During this collaboration I was in charge of designing the prototype. I used
                        Adobe XD since it is the tool that I was most familiar with at the time. The screens displayed
                        throughout this project showdcase are from that prototype. I created what I deemed to be all
                        of the necessary screens in order to fully show all of the functionality we wanted our MVP
                        to contain. If you're interested in viewing the full prototype for yourself you can follow 
                        the link below. "/>
                    <PortfolioLink 
                        link='https://xd.adobe.com/view/1e625227-5a3c-4ad1-b210-8c2349785bd0-4b31/'/>
                    <PortfolioText 
                        text='At the end of the course we got to pitch our idea in a "shark tank" in
                        cooperation with Sigma Industry East North. At the end of the course our project was 
                        fortunate to win the award for the best project. With that the opportunity to get help
                        and resources from Sigma Industry East North for further development.'/>
                    <PortfolioImage img="/hobbies-award.png" />
                    <PortfolioText 
                        text='In the end we decided to decline this offer since both Linus and I had
                        a few things going on that we wanted to focus our time with. This course and this
                        experience was a fun, interesting, and challenging process where we got to work with
                        a project that you could feel more attached to. During the course we got to do a lot
                        of things related to the start-up process that are "less fun", but incredibly healthy 
                        to get more experience at since it is crucial to increasing the success rate to take into 
                        consideration and evaluate further. The start-up process is one that intrerest me greatly, 
                        and it is because of that interest I have decided to search for opportunities in those areas.
                        Splick and Uminova Innovation are two great examples of that. That ends the Hobbies chapter in
                        my life for now, but who knows, if I find the time in the future it might be something that I 
                        want to pursue further'/>

                </div>
            </div>
        </div>
    )
}

export default hobbies
