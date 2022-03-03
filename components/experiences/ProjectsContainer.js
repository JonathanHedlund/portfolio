import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ProjectsContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Projects" button={false}/>
            <ExperienceItem 
                link="/portfolio/social-media"
                img="/wip.png"
                header="WIP - New social media"
                role="Project"
                timeslot="FEB 2022 - CURRENsT"/>
            <ExperienceItem 
                link="/portfolio/hobbies"
                img="/hobbies-logo.png"
                header="Hobbies"
                role="Project"
                timeslot="AUG 2020 - JAN 2021"/>
            <ExperienceItem
                link="/portfolio/nordic"
                img="nordic.png"
                header="Nordic JS & Nordic Design"
                role="Attendees - Team Lead"
                timeslot="SEP 2019"/>
            <ExperienceItem 
                link="/portfolio/csncountdown"
                img="csncountdown.png"
                header="CSN Countdown"
                role="Project"
                timeslot="APR 2019 - MAY 2019"/>
            <ExperienceItem 
                link="/portfolio/arboreal"
                img="arboreal.png"
                header="Arboreal"
                role="Project"
                timeslot="JAN 2019 - MAY 2019"/>
            <ExperienceItem 
                link="/portfolio/idagochinatt"
                img="idagochinatt.png"
                header="IDag & Inatt"
                role="Project manager"
                timeslot="SEP 2018 - OKT 2019"/>
            <ExperienceItem 
                link="/portfolio/individ"
                img="individ.png"
                header="IndivID"
                role="Chairman"
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

export default ProjectsContainer