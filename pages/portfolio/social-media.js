import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'
import portfolioStyles from '../../styles/Portfolio.module.css'

const socialMedia = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/wip.png"
                experienceType="PROJECT"
                header="WIP - New social media"
                role="Creator"
                timeframe="February 2022 - Current"
                link="https://hobbies.vercel.app"
                linkName="Check out the website!"
                text="Started working on a new (larger) project. A social media that also creates 
                value for using it on your own. The service is centered around goals, goals that 
                goals that you want to accomplish. Where you can share your progress
                and create groups with your friends and accomplish goals alongside each other.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="Why is this posted here?" />
                    <PortfolioText 
                        text="Even though I'm still very early on in this project I thought it would be
                        fun to post it here. So if you're intersted in checking out the progress I've made
                        so far you can follow the link to the website below."/>
                    <PortfolioText 
                        text="I've only been working on the mobile version of the site so far, so keep that in mind."/>
                    <PortfolioLink link="https://hobbies.vercel.app" linkName="Check out the website!" />
                    
                </div>
            </div>
        </div>
    )
}

export default socialMedia
