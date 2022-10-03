import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'

import portfolioStyles from '../../styles/Portfolio.module.css'

const intam = () => {
	return (
		<div className={portfolioStyles.portfolioPageContainer}>
			<PortfolioHeader
				img='/intam.png'
				experienceType='EXPERIENCE'
				header='Intam'
				role='Founder'
				timeframe='August 2020 - April 2022'
				text="A web agency that specializes in creating user-friendly and responsive websites 
                tailored for the customer's needs. Intam offers services such as UI/UX design, web development
                and search engine optimization for brands that want to increase their presence on the web."
			>
				<HeaderNav />
			</PortfolioHeader>
			<div className={portfolioStyles.portfolioPageContainerContent}>
				<div className={portfolioStyles.portfolioPageContainerContentInner}>
					<PortfolioTitle title='About the company' />
					<PortfolioText
						text="I started Intam with the purpose of having a side business where I could use the 
                        web development experience I gained throughout the years of studying at Umeå University, 
                        as well as the various side projects I've done in my spare time."
					/>
					<PortfolioText
						text="The web agency delivers solutions based on the customers needs, that could be
                        a website created with WordPress that the customers easily can manage after it's been
                        delivered or more complex websites created with more traditional web development technologies
                        such as HTML, CSS, JavaScript, and React."
					/>
					<PortfolioImage img='/intam-image.png' />
					<PortfolioTitle title='My experience' />
					<PortfolioText
						text="Intam was a great source of experience in learning what it takes to set up
                        a business and work with clients to meet their needs. Since I started working full time I've stopped taking on extra work through Intam."
					/>
				</div>
			</div>
		</div>
	)
}

export default intam
