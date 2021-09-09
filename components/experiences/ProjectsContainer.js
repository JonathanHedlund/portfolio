import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ProjectsContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Projects" button={false}/>
            <ExperienceItem 
                img="csncountdown.png"
                header="Hobbies"
                role="Project"
                timeslot="JUNE 2016 - SEPTEMBER 2018"/>
            <ExperienceItem 
                img="csncountdown.png"
                header="Arboreal"
                role="Project"
                timeslot="JUNE 2016 - SEPTEMBER 2018"/>
            <ExperienceItem 
                img="csncountdown.png"
                header="CSN Countdown"
                role="Project"
                timeslot="JUNE 2016 - SEPTEMBER 2018"/>
            <ExperienceItem 
                img="idagochinatt.png"
                header="IDag & Inatt"
                role="Project manager"
                timeslot="SEPTEMBER 2018 - OKTOBER 2019"/>
            <ExperienceItem 
                img="/umeauniversity.png"
                header="Buddy programme"
                role="Group Leader"
                timeslot="SEPTEMBER 2018 - OKTOBER 2019"/>
        </div>
    )
}

export default ProjectsContainer