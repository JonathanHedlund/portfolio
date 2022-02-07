import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const intam = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/intam.png"
                experienceType="EXPERIENCE"
                header="Intam"
                role="Founder"
                timeframe="August 2020 - Current"
                link='https://intam.se/'
                linkName="View the website"
                text="A web agency that specializes in creating user-friendly and responsive websites 
                tailored for the customer's needs. Intam offers services such as UI/UX design, web development
                and search engine optimization for brands that want to increase their presence on the web.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioTitle title="About the company" />
                    <PortfolioText 
                        text="I started Intam with the purpose of having a side business where I could use the 
                        web development experience I gained throughout the years of studying at Umeå University, 
                        as well as the various side projects I've done in my spare time."/>
                    <PortfolioText 
                        text="The web agency delivers solutions based on the customers needs, that could be
                        a website created with WordPress that the customers easily can manage after it's been
                        delivered or more complex websites created with more traditional web development technologies
                        such as HTML, CSS, JavaScript, and React."/>
                    <PortfolioImage img="/intam-image.png" />
                    <PortfolioTitle title="My experience" />
                    <PortfolioText 
                        text="Intam has been a great source of experience in learning what it takes to set up
                        a business and work with clients to meet their needs. I'm always up for more work to further 
                        my expertise in the field, check out the link to the website below if you're interested in 
                        getting in touch with me for a potential collaboration."/>
                    <PortfolioLink 
                        link='https://intam.se/'
                        linkName="View the website by clicking here!"/>
                </div>
            </div>
        </div>
    )
}

export default intam
