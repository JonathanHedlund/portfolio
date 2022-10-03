import HeaderNav from '../../components/HeaderNav'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader'
import PortfolioImage from '../../components/portfolio/PortfolioImage'
import PortfolioTitle from '../../components/portfolio/PortfolioTitle'
import PortfolioText from '../../components/portfolio/PortfolioText'
import PortfolioLink from '../../components/portfolio/PortfolioLink'

import portfolioStyles from '../../styles/Portfolio.module.css'

const netlight = () => {
	return (
		<div className={portfolioStyles.portfolioPageContainer}>
			<PortfolioHeader
				img='/netlight.jpg_large'
				experienceType='EXPERIENCE'
				header='Netlight'
				role='Consultant'
				timeframe='September 2022 - Current'
				link='https://netlight.com'
				linkName='Check out the website!'
				text='Netlight is a genuine consulting firm. We refine the concept of IT-consulting to be about talents who, in cooperation, create valuable results for our clients.'
			>
				<HeaderNav />
			</PortfolioHeader>
			<div className={portfolioStyles.portfolioPageContainerContent}>
				<div className={portfolioStyles.portfolioPageContainerContentInner}>
					<PortfolioTitle title='What is Netlight?' />
					<PortfolioText text='Netlight is a genuine consulting firm. We refine the concept of IT-consulting to be about talents who, in cooperation, create valuable results for our clients. ' />
					<PortfolioText text='For genuine consultants the clients interest always comes first. Our clients are market leading within their field. Our goal is to deliver independent solutions and tangible results based on our clients’ conditions and business objectives. We accomplish this by focusing on competence, creativity and business sense. ' />
					<PortfolioText text='For genuine consultants the clients interest always comes first. Our clients are market leading within their field. Our goal is to deliver independent solutions and tangible results based on our clients’ conditions and business objectives. We accomplish this by focusing on competence, creativity and business sense. ' />
					<PortfolioText text='Our offering is realized by Netlight’s talented consultants, with qualifications above the ordinary. Netlight delivers independent solutions together and benefits from our collective expertise, beyond the single individual’s ability. This allows Netlight to engage where IT is business critical by taking on our clients’ biggest challenges and identifying opportunities or solving problems. We call it to grow talent, create together and engage in challenge.' />
					<PortfolioText text='For genuine consultants the clients interest always comes first. Our clients are market leading within their field. Our goal is to deliver independent solutions and tangible results based on our clients’ conditions and business objectives. We accomplish this by focusing on competence, creativity and business sense. ' />
					<PortfolioText text='Today the company operates throughout Europe with offices in Stockholm, Oslo, Copenhagen, Helsinki, Munich, Hamburg, Berlin, Frankfurt, Zurich, Amsterdam & Cologne.' />
					<PortfolioLink
						link='https://netlight.com'
						linkName="View Netlight's website."
					/>
				</div>
			</div>
		</div>
	)
}

export default netlight
