import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioImageVertical from '../../components/portfolio/PortfolioImageVertical'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const umeauniversity = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader 
                img="/klassfoto.jpg"
                experienceType="EDUCATION"
                header="Umeå University"
                role="Student"
                timeframe="August 2016 - Current"
                text="I'm currently a student at Umeå University studying interaction design and economics.
                    I'm enrolled in the Master of Science in Interaction & Design program as well as I'm
                    working towards getting a Bachelor of Science in Economics.">
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div className={portfolioStyles.portfolioPageContainerContentInner}>
                    <PortfolioText 
                        text="I started my studies at Umeå University in the fall of 2016. I wasn't really sure what I
                        wanted to do after high school, I knew I wanted to study further but I did not know what 
                        program was most suited for me. At the time I was
                        interested in design and economics so my first thought was something related to those
                        subjects. At the time my sister was studying the Master of Science in Interaction & Design at 
                        Umeå University, I had visited her a few times during 2016 and that was how I first heard
                        about the program. The program consists of areas such as programming, design, 
                        behavioral science, user testing, web design, and project management. I thought this
                        sounded pretty interesting so I applied for the program and got in."/>
                    <PortfolioText 
                        text="I had no prior experience in programming or web development so when I first got
                        there it was a bit overwhelming learning all the new skills required to complete the
                        curriculum. But as time went on I got more familiar with it and my interest in the field
                        grew as I was getting better and better at it. Now it is one of my main hobbies and 
                        can't think of a more fun and challenging field to work in."/>
                    <PortfolioText 
                        text="A couple of years into my studies I was still interested in economics and since 
                        the program I was studying did not really cover that area I started looking for 
                        opportunities to gain further knowledge in the field. That was when I discovered that I 
                        could get a Bachelor of Science in Economics by choosing courses in economics whenever I
                        had the opportunity as well as staying one more semester after finishing my Master of Science
                        program."/>
                    <PortfolioText 
                        text="You gain knowledge about the whole development process throughout the years at
                        the Master of Science in Interaction & Design program. It felt important for me to
                        broaden my knowledge by getting a degree in economics so that I could get a more
                        overall view of what it takes to run and build a business from scratch."/>
                    <PortfolioText 
                        text="If you're interested in reading more about the Master of Science in Interaction & 
                        Design as well as the Bachelor of Science in Economics I've posted the links to each page
                        below"/>
                    <PortfolioLink 
                        link='https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/'
                        linkName="Click here to read more about the Master of Science in Interaction & 
                        Design programme."/>
                    <PortfolioLink 
                        link='https://www.umu.se/utbildning/kurser/kandidatuppsats-i-foretagsekonomi/'
                        linkName="Click here to read more about the Bachelor of Science in Economics."/>
                    <PortfolioText 
                        text="Every year at the Master of Science in Interaction & Design program, a student 
                        currently studying the fourth year is voted the student of the year. It is given to a 
                        person who has been engaged and added something extra to the program during 
                        their years of studying. In 2020 I was honored to win this award and recieve this 
                        nice graphic."/>
                    <PortfolioImageVertical img="/aretsidare.jpeg" />
                    <PortfolioText 
                        text="My time at Umeå University has given me invaluable experience as well as time to
                        think about what I wanted to do in my career. The friends that I've made and the
                        experiences that I've had will stay with me my whole life. The image below is of my
                        classmates taken at the IDag & Inatt event in 2019."/>
                    <PortfolioImage img="/klassfoto.jpg" />
                </div>
            </div>
        </div>
    )
}


export default umeauniversity
