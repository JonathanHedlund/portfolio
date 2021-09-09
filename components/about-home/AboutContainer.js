import AboutHomeText from './AboutHomeText'
import AboutHomeSkillsAndTools from './AboutHomeSkillsAndTools'

import styles from '../../styles/AboutHome.module.css'

const AboutContainer = () => {
    return (
        <div className={styles.aboutHomeContainer}>
            <h2 className={styles.headerMobile}>About me</h2>
            <div className={styles.profilePicture} style={
                { backgroundImage: 'url(/jonathan-uppsala.jpeg)'}}>
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.header}>About me</h2>
                <AboutHomeText 
                    text="I'm Jonathan, a guy from Northern Sweden that loves getting involved in new projects and
                    opportunities where I get the change to learn new things and challenge myself. Currently I'm 
                    mostly interested in software development, design, and entrepreneurship. Outside of that I spend most
                    my time diving head first into whatever hobbies I have at the time and cook food that at least I 
                    think tastes pretty good." />
                <AboutHomeSkillsAndTools />
            </div>
        </div>
    )
}

export default AboutContainer
