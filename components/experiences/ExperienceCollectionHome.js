import ExperienceContainerHome from './ExperienceContainerHome'
import ProjectsContainerHome from './ProjectsContainerHome'
import PublicationContainer from './PublicationsContainer'
import EducationContainer from './EducationContainer'

import styles from '../../styles/Experience.module.css'

const ExperienceCollectionHome = () => {
    return (
        <div className={styles.experienceCollectionContainer}>
            <ExperienceContainerHome />
            <ProjectsContainerHome />
            <PublicationContainer />
            <EducationContainer />
        </div>
    )
}

export default ExperienceCollectionHome
