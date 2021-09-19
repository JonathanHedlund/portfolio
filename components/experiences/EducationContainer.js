import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const EducationContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Education" button={false}/>
            <ExperienceItem 
                link="/portfolio/umeauniversity"
                img="/umeauniversity.png"
                header="Master of Science, Interaction & Design"
                role="Umeå University"/>
            <ExperienceItem 
                link="/portfolio/umeauniversity"
                img="/umeauniversity.png"
                header="Bachelor of Science in Economics"
                role="Umeå University"/>
        </div>
    )
}

export default EducationContainer
