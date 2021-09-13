import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ExperienceContainerHome = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Experiences" button={true}/>
            <ExperienceItem
                link="/portfolio/uminovainnovation"
                img="/uminovainnovation.png"
                header="Uminova Innovation"
                role="Student communicator"
                timeslot="FEBUARI 2020 - APRIL 2021"/>
            <ExperienceItem 
                link="/portfolio/piteakommun"
                img="/piteakommun.png"
                header="Piteå kommun"
                role="Supervisor at Ung i Piteå"
                timeslot="FEBUARI 2020 - APRIL 2021"/>
        </div>
    )
}

export default ExperienceContainerHome
