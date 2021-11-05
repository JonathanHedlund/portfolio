import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
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
                tailored for the customer's goals. Intam offers services such as UI/UX design, web development
                and search engine optimization for brands that want to increase their presence on the web.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText 
                        text='I started Intam with the purpose of having a side business where I could use my 
                        web development experience I have gained throughout the years of studying at Umeå University 
                        as well as the various side projects I have taken on in my spare time.'/>
                    <PortfolioText 
                        text="The web agency delivers solutions based on the the customers needs, that could be
                        a website created with Wordpress that the customers easily can manage after it's been
                        delivered or more complex websited created with more traditional web development technologies
                        such as HTML, CSS and React."/>
                    <PortfolioText 
                        text="Intam has been a great source of experience for me in learning what it takes to set up
                        a business and work with clients to meet their needs. I'm always up for more work to further 
                        my expertice in the field, check out the link to the website below if you are interested in 
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
