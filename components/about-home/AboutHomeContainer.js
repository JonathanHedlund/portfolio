import AboutHomeText from './AboutHomeText'
import AboutHomeSkillsAndTools from './AboutHomeSkillsAndTools'

import styles from '../../styles/AboutHome.module.css'

const AboutHomeContainer = () => {
    return (
        <div className={styles.aboutHomeContainer}>
            <h2 className={styles.headerMobile}>About me</h2>
            <div className={styles.profilePicture} style={
                { backgroundImage: 'url(/jonathan-uppsala.jpeg)'}}>
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.header}>About me</h2>
                <AboutHomeText 
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur." />
                <AboutHomeSkillsAndTools />
            </div>
        </div>
    )
}

export default AboutHomeContainer
