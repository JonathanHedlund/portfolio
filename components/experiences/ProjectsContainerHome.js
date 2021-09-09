import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ProjectsContainerHome = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Projects" button={true}/>
            <ExperienceItem 
                img="csncountdown.png"
                header="CSN Countdown"
                role="Project"
                timeslot="APRIL 2019 - MAY 2019"/>
            <ExperienceItem 
                img="idagochinatt.png"
                header="IDag & Inatt"
                role="Project manager"
                timeslot="SEPTEMBER 2018 - OKTOBER 2019"/>
            <ExperienceItem 
                img="/umeauniversity.png"
                header="Buddy programme"
                role="Group Leader"
                timeslot="AUGUST 2017 - DECEMBER 2017"/>
        </div>
    )
}

export default ProjectsContainerHome