import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ProjectsContainerHome = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Projects" button={true}/>
            <ExperienceItem 
                link="/portfolio/csncountdown"
                img="csncountdown.png"
                header="CSN Countdown"
                role="Project"
                timeslot="APR 2019 - MAY 2019"/>
            <ExperienceItem 
                link="/portfolio/idagochinatt"
                img="idagochinatt.png"
                header="IDag & Inatt"
                role="Project manager"
                timeslot="SEP 2018 - OKT 2019"/>
            <ExperienceItem 
                link="/portfolio/buddyprogramme"
                img="/umeauniversity.png"
                header="Buddy programme"
                role="Group Leader"
                timeslot="AUG 2017 - DEC 2017"/>
        </div>
    )
}

export default ProjectsContainerHome