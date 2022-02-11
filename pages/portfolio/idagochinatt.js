import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const idagochinatt = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/klassfoto.jpg"
                experienceType="PROJECT"
                header="IDag & Inatt"
                role="Project manager"
                timeframe="September 2018 - Oktober 2019"
                text="IDag & Inatt is the annual career fair for the Master of Science and Engineering in 
                    Interaction and Design program where companies in the tech industry and students 
                    get the opportunity to establish important contacts. Netlight, Expressen, Dobermann, and 
                    Cygni are examples of companies that previously have attended this career fair. I was the project 
                    manager in charge of organizing the 2019 iteration of this event.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="About the event" />
                    <PortfolioText 
                    text='In charge of the annual career fair "IDag & Inatt" for the Master of Science 
                    and Engineering in Interaction and Design students. An event where companies in the tech industry 
                    and students get the opportunity to establish important contacts. Netlight, Expressen, Dobermann, 
                    and Cygni are examples of companies that previously have attended this career fair. IDag & Inatt 
                    is divided into two parts, the first, IDag, takes place during the day where companies get the 
                    chance to talk directly to interested students and hold presentations. The second part, Inatt, 
                    is a banquet organized during the evening where students and companies get the chance to network 
                    and mingle.' />
                    <PortfolioText 
                    text='The group in charge of planning this career fair consists of students who work 
                    voluntarily to make this event possible. The team is split into three different groups, 
                    one group responsible for IDag, one for Inatt, and one group for PR. In addition to the groups, 
                    there is also a project leader responsible for bringing everything together, this was my role 
                    during the 2019 iteration of IDag & Inatt.' />
                    <PortfolioText 
                    text="IDag & Inatt is one of the main highlights each year for the program, where all the
                    students from years 1-5 are welcome to attend. The event usually takes place early in the
                    month of May but the planning phase starts much sooner. The project group starts its lengthy
                    planning phase in September due to the various pieces that need to come together in order for
                    the event to be possible." />
                    <PortfolioTitle title="My role" />
                    <PortfolioText 
                    text="Being the project manager for a large event like this was a fun
                    and challenging experience. Organizing an event with such a large time span as this one was 
                    something I had never done before. I'm delighted by how the event turned out and grateful
                    for the experience I gained through it. The picture below is of my classmates and I at
                    the 2019 event." />
                    <PortfolioImage img="/klassfoto.jpg" />
                    <PortfolioText 
                    text='In addition to being the project manager for the 2019 iteration, I was a part of the "IDag" 
                    team in charge of the first part of the event in 2018. At the event, I acted as host together
                    with my friend Sam Darrehshourian, where the picture below is taken.' />
                    <PortfolioImage img="/konferencie.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default idagochinatt
