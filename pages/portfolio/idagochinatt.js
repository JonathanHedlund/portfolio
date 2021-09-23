import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
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
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
                    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Cum sociis natoque 
                    penatibus et magnis dis parturient montes, nascetur.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText text='In charge of the annual career fair "IDag & Inatt" for the Master of Science 
                        and Engineering in Interaction and Design students. An event where companies in the tech industry 
                        and students get the opportunity to establish important contacts. Netlight, Expressen, Dobermann, 
                        and Cygni are examples of companies that previously have attended this career fair. IDag & Inatt 
                        is divided into two parts, the first, IDag, takes place during the day where companies get the 
                        chance to talk directly to interested students and hold presentations. The second part, Inatt, 
                        is a banquet organized during the evening where students and companies get the chance to network 
                        and mingle. The group in charge of planning this career fair consists of students who work 
                        voluntarily to make this event possible. The team is split into three different groups, 
                        one group responsible for IDag, one for Inatt and one group for PR. In addition to the groups, 
                        there is also a project leader responsible for bringing everything together, this was my role 
                        during the 2019 iteration of IDag & Inatt.' />
                    <PortfolioText text='The group in charge of planning this career fair consists of students who work 
                        voluntarily to make this event possible. The team is split into three different groups, 
                        one group responsible for IDag, one for Inatt and one group for PR. In addition to the groups, 
                        there is also a project leader responsible for bringing everything together, this was my role 
                        during the 2019 iteration of IDag & Inatt.' />
                </div>
            </div>
        </div>
    )
}

export default idagochinatt
