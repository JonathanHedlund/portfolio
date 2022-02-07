import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const splick = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/splick.png"
                experienceType="EXPERIENCE"
                header="Splick"
                role="Co-founder - CTO"
                timeframe="April 2020 - Current"
                link="https://splick.io"
                linkName="Check out the website!"
                text="Splick is a next-generation platform for helping e-commerce companies and influencers 
                connect and collaborate. I'm one of the co-founders at Splick where my main responsibility is 
                head of technology.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="What is Splick?"/>
                    <PortfolioText text="Splick is a startup company that connects brands and influencers
                    with an easy-to-use platform where they can analyse their data
                    from various social media platforms to gain insight into their marketing efforts.
                    Brands and influencers can collaborate through Splick and get a better understanding
                    of how their partnership turned out."/>
                    <PortfolioImage img="/splick-2.png"/>
                    <PortfolioTitle title="What I do at Splick"/>
                    <PortfolioText text="I started working with Splick back in April 2020 and have since then
                    worked with the development of the service. Building a company from the ground up, together
                    with my co-founders, is extremely rewarding and challenging. The experience
                    and knowledge you gain through having as much responsibility as a startup company requires
                    is invaluable."/>
                    <PortfolioImage img="/splick-3.png"/>
                    <PortfolioText text="If you're interested in learning more about Splick and what service we
                    provide you can check out our website through the link below." />
                    <PortfolioLink link="https://splick.io" linkName="View Splick's website."/>
                </div>
            </div>
        </div>
    )
}

export default splick
