import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioImageVertical from '../../components/portfolio/PortfolioImageVertical'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const umeauniversity = () => {
    return (
        <div className={portfolioStyles.portfolioPageContainer}>
            <PortfolioHeader
                img='/klassfoto.jpg'
                experienceType='EDUCATION'
                header='Umeå University'
                role='Student'
                text='I studied at Umeå University getting a Master of Science degree in Interaction & Design.'
            >
                <HeaderNav />
            </PortfolioHeader>
            <div className={portfolioStyles.portfolioPageContainerContent}>
                <div
                    className={
                        portfolioStyles.portfolioPageContainerContentInner
                    }
                >
                    <PortfolioTitle title='My choice of education' />
                    <PortfolioText
                        text="I started my studies at Umeå University in the fall of 2016. I wasn't really sure what I
                        wanted to do after high school, I knew I wanted to study but I did not know what 
                        program suited me. I was interested in design and economics so my first thought was something 
                        related to those subjects. At the time my sister was studying the Master of Science in 
                        Interaction & Design at 
                        Umeå University, I had visited her a few times during 2016 and that was how I first heard
                        about the program. The program consists of areas such as programming, design, 
                        behavioral science, user testing, web design, and project management. I thought this
                        seemed interesting so I applied for the program and got in."
                    />
                    <PortfolioTitle title='The education itself' />
                    <PortfolioText
                        text="I had no prior experience in programming or web development so when I first got
                        there it was a bit overwhelming learning all the new skills required to complete the
                        curriculum. But as time went on I got more familiar with it and my interest in the field
                        grew as I was getting better and better at it. Now it is one of my main hobbies and 
                        can't imagine a more fun and challenging field to work in."
                    />
                    <PortfolioText
                        text="If you're interested in reading more about the Master of Science in Interaction & 
                        Design I've posted the link to a page about it below"
                    />
                    <PortfolioLink
                        link='https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/'
                        linkName='Click here to read more about the Master of Science in Interaction & 
                        Design programme.'
                    />
                    <PortfolioTitle title='Bonus' />
                    <PortfolioText
                        text='Every year at the Master of Science in Interaction & Design program, a student 
                        currently studying the fourth year is voted the student of the year. It is given to a 
                        person who has been engaged and added something extra to the program during 
                        their years of studying. In 2020 I was honored to win this award and receive this 
                        nice graphic.'
                    />
                    <PortfolioImageVertical img='/aretsidare.jpeg' />
                    <PortfolioText
                        text="My time at Umeå University has given me invaluable experience as well as time to
                        think about what I wanted to do in my career. The friends that I've made and the
                        experiences that I've had will stay with me my whole life. The image below is of my
                        classmates taken at the IDag & Inatt event in 2019."
                    />
                    <PortfolioImage img='/klassfoto.jpg' />
                </div>
            </div>
        </div>
    )
}

export default umeauniversity
