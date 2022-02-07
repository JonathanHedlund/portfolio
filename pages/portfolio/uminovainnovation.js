import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const uminovainnovation = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/uminova-banner.jpeg"
                experienceType="EXPERIENCE"
                header="Uminova Innovation"
                role="Student communicator"
                timeframe="February 2020 - April 2021"
                text="Uminova Innovation is one of Sweden’s foremost business incubators and is a catalyst 
                for growth in northern Sweden. I worked at Uminova Innovation as a student communicator
                where I got the opportunity to organize events, write articles, and use my knowledge of web 
                development to consult start-ups.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                <PortfolioTitle title="About Uminova"/>
                    <PortfolioText 
                        text="Uminova Innovation is one of Sweden’s foremost business incubators. It is a catalyst 
                        for growth in northern Sweden, and a driving force in creating the best possible conditions 
                        for innovative and scalable growth companies to reach their full potential. With business 
                        support at the forefront, Uminova Innovation help people to invest in and develop their business ideas. 
                        They accomplish this through ambitious collaborations with industry, 
                        large companies, investors, partners and their contact network of talented and skilled 
                        people." />
                    <PortfolioTitle title="How I got involved"/>
                    <PortfolioText 
                        text="Uminova Innovation has a strong connection to the students at Umeå University.
                        During my first years of studying there I often attended the various events they organized
                        for students who are interested in entrepreneurship. I got to talk to the employees 
                        at Uminova Innovation in charge of these events when I attended and after a while, I got 
                        to know them and they got to know me better. When a position opened up as a
                        student communicator I got recommended by Magdalena Lindström at Uminova Innovation
                        to fill that spot. I was excited to get a chance to work closer with Uminova Innovation
                        and the start-up companies in their incubator." />
                    <PortfolioTitle title="My experience"/>
                    <PortfolioText 
                        text="I started working there in February of 2020 organizing events and helping
                        out wherever they needed me. Due to the pandemic hitting Sweden in late March my 
                        responsibilities at the company changed quite drastically since we were no longer
                        able to organize in-person events. I got to help out more with Uminova Innovations
                        general communication, interviewing start-ups, writing articles, and using my web development
                        experience to build a website for one of their start-up companies." />
                    <PortfolioText 
                        text="I thoroughly enjoyed my time at Uminova Innovation, it gave me the opportunity to
                        meet a lot of interesting people, gain experience in the areas I got to work in, and 
                        learn more about the start-up process. At one of the events at Umionva Innovation, 
                        before the pandemic struck, I got in contact with the start-up company Splick where I
                        started working as their lead developer. I'm glad I took the opportunity to work 
                        there partly because it opened up a lot of doors for me to pursue my interest in 
                        entrepreneurship." />
                </div>
            </div>
        </div>
    )
}

export default uminovainnovation
