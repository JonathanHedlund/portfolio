import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ProjectsContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Projects" button={false}/>
            <ExperienceItem 
                img=""
                header="Hobbies"
                role="Project"
                timeslot="AUGUST 2020 - JANUARI 2021"/>
            <ExperienceItem 
                img="csncountdown.png"
                header="CSN Countdown"
                role="Project"
                timeslot="APRIL 2019 - MAY 2019"/>
            <ExperienceItem 
                img="arboreal.png"
                header="Arboreal"
                role="Project"
                timeslot="JANUARI 2019 - MAY 2019"/>
            <ExperienceItem 
                img="nordic.png"
                header="Nordic JS & Nordic Design"
                role="Attendees - Team Lead"
                timeslot="SEPTEMBER 2019"/>
            <ExperienceItem 
                img="idagochinatt.png"
                header="IDag & Inatt"
                role="Project manager"
                timeslot="SEPTEMBER 2018 - OKTOBER 2019"/>
            <ExperienceItem 
                img="individ.png"
                header="IndivID"
                role="Chairman"
                timeslot="SEPTEMBER 2018 - OKTOBER 2019"/>
            <ExperienceItem 
                img="/umeauniversity.png"
                header="Buddy programme"
                role="Group Leader"
                timeslot="AUGUST 2017 - DECEMBER 2017"/>
        </div>
    )
}

export default ProjectsContainer