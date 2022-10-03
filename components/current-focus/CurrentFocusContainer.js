import CurrentFocusItem from './CurrentFocusItem'

import styles from '../../styles/CurrentFocus.module.css'

const CurrentFocusContainer = () => {
	return (
		<div className={styles.currentFocusMainContainer}>
			<h2 className={styles.header}>What I'm currently focusing on</h2>
			<div className={styles.currentFocuses}>
				<CurrentFocusItem
					img='/netlight.jpg_large'
					header='Netlight'
					role='Consultant'
					timeslot='SEPTEMBER 2022 - CURRENT'
					text='Netlight is a genuine consulting firm. We refine the concept of IT-consulting to be about talents who, in cooperation, create valuable results for our clients.'
					link='/portfolio/netlight'
				/>
				<CurrentFocusItem
					img='/splick.png'
					header='Splick'
					role='Co-founder'
					timeslot='MARCH 2020 - CURRENT'
					text='A next-generation platform for helping e-commerce companies and influencers 
                    connect and collaborate.'
					link='/portfolio/splick'
				/>
			</div>
		</div>
	)
}

export default CurrentFocusContainer
