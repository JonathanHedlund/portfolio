import ExperienceContainer from './ExperienceContainer'
import ProjectsContainer from './ProjectsContainer'
import PublicationContainer from './PublicationsContainer'
import EducationContainer from './EducationContainer'

import styles from '../../styles/Experience.module.css'

const ExperienceCollection = () => {
    return (
        <div className={styles.experienceCollectionContainer}>
            <ExperienceContainer />
            <ProjectsContainer />
            <PublicationContainer />
            <EducationContainer />
        </div>
    )
}

export default ExperienceCollection
