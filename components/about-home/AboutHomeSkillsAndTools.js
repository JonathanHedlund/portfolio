import styles from '../../styles/AboutHome.module.css'

const AboutHomeSkillsAndTools = () => {
    return (
        <div>
            <div className={styles.skillsContainer}>
                <h3 className={styles.skillsAndToolsHeader}>SKILLS</h3>
                <p className={styles.tag}>Software development, UI/UX design, Prototyping, Visual design, Leadership</p>
            </div>
            <div className={styles.toolsContainer}>
                <h3 className={styles.skillsAndToolsHeader}>TOOLS</h3>
                <p className={styles.tag}>
                    HTML, CSS, Javascript, Adobe Creative Suite, React, NextJS, Java, C, 
                    PHP, Wordpress, SQL, noSQL, MongoDB, Codeigniter
                </p>
            </div>
        </div>
    )
}

export default AboutHomeSkillsAndTools
