import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const buddyprogramme = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/buddypic.jpeg"
                experienceType="PROJECT"
                header="Buddy programme"
                role="Group Leader"
                timeframe="August 2017 - December 2017"
                text="The Buddy Programme is a multicultural community engaging international and domestic students. 
                The program offers the opportunity to take part in a wide variety of social activities, for example, 
                sports, parties and traveling. Buddies are students at Umeå University who volunteer to introduce 
                international students to the Swedish way of life. A buddy group consists of around 8 - 10 Buddies 
                and 25 - 30 international students.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="My participation" />
                    <PortfolioText text="I've been a part of the Buddy Programme for two semesters, first during 
                        the fall semester of 2017 as a group leader and during the spring semester of 2018 as a group 
                        member. I got the opportunity to get to know some amazing people through the Buddy Programme 
                        and I'm happy I took the chance to participate." />
                    <PortfolioText 
                        text="The image below is from one of the futsal events we organized for our
                        group during the fall semster of 2017." />
                    <PortfolioImage img="/indoorsoccer.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default buddyprogramme
