import HeroIconLink from './HeroIconLink'

import styles from '../../styles/Hero.module.css'

const HeroContainer = () => {
	const handleClick = () => {
		const yOffset = -80
		const element = document.getElementById('contact-container')
		const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

		return window.scrollTo({ top: y, behavior: 'smooth' })
	}

	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<span className={styles.welcomeText}>Welcome to my portfolio!</span>
				<h1 className={styles.nameText}>I'm Jonathan</h1>
				<div className={styles.heroTagContainer}>
					<div className={styles.heroTag}>Software Developer</div>
				</div>
				<div className={styles.heroLinksContainer}>
					<div
						className={`btn ${styles.contactButton}`}
						onClick={() => handleClick()}
					>
						Get in touch
					</div>
					<div className={styles.heroLinkContainer}>
						<HeroIconLink
							text=''
							icon={'envelope'}
							iconType='fas'
							link='mailto:jonathan.hedlund@netlight.com'
						/>
						<HeroIconLink
							text=''
							icon={'linkedin'}
							iconType='fab'
							link='https://www.linkedin.com/in/jonathanhedlund/'
						/>
						<HeroIconLink
							text=''
							icon={'book'}
							iconType='fas'
							link='https://www.goodreads.com/user/show/89568653-jonathan-hedlund'
						/>
					</div>
				</div>
			</div>
			<div className={styles.heroTellusContainer}>
				<img
					src='/earth-mobile.png'
					alt=''
					className={styles.heroTellusMobile}
				/>
				<img src='/earth.png' alt='' className={styles.heroTellus} />
			</div>
		</div>
	)
}

export default HeroContainer
