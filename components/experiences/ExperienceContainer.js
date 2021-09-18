import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ExperienceContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header="Experiences" button={false}/>
            <ExperienceItem
                link="/portfolio/intam"
                img="/intam-logo.png"
                header="Intam"
                role="Founder"
                timeslot="AUGUST 2020 - CURRENT"/>
            <ExperienceItem
                link="/portfolio/splick"
                img="/splick-logo.png"
                header="Splick"
                role="Co-founder - CTO"
                timeslot="APRIL 2020 - CURRENT"/>
            <ExperienceItem
                link="/portfolio/uminovainnovation"
                img="/uminovainnovation.png"
                header="Uminova Innovation"
                role="Student communicator"
                timeslot="FEBRUARY 2020 - APRIL 2021"/>
            <ExperienceItem 
                link="/portfolio/piteakommun"
                img="/piteakommun.png"
                header="Piteå kommun"
                role="Supervisor at Ung i Piteå"
                timeslot="JUNE 2016 - SEPTEMBER 2018"/>
        </div>
    )
}

export default ExperienceContainer
