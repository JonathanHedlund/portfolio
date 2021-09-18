import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const buddyprogramme = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img=""
                experienceType="Project"
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
                    <PortfolioText text="I've been part of the Buddy Programme during two semesters, first during 
                        the fall semester of 2017 as a group leader and during the spring semester of 2018 as a group 
                        member. I got the opportunity to get to know some amazing people through the Buddy Programme 
                        and I'm happy I took the chance to participate." />
                </div>
            </div>
        </div>
    )
}

export default buddyprogramme
