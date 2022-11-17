import ExperienceHeader from './ExperienceHeader'
import ExperienceItem from './ExperienceItem'

import styles from '../../styles/Experience.module.css'

const ExperienceContainer = () => {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceHeader header='Experiences' button={false} />
            <ExperienceItem
                link='/portfolio/netlight'
                img='/netlight.jpg_large'
                header='Netlight'
                role='Consultant'
                timeslot='SEP 2022 - CURRENT'
            />
            <ExperienceItem
                link='/portfolio/intam'
                img='/intam-logo.png'
                header='Intam'
                role='Founder'
                timeslot='AUG 2020 - APR 2022'
            />
            <ExperienceItem
                link='/portfolio/splick'
                img='/splick-logo.png'
                header='Splick'
                role='Co-founder - CTO'
                timeslot='APR 2020 - CURRENT'
            />
            <ExperienceItem
                link='/portfolio/uminovainnovation'
                img='/uminovainnovation.png'
                header='Uminova Innovation'
                role='Student communicator'
                timeslot='FEB 2020 - APR 2021'
            />
            <ExperienceItem
                link='/portfolio/piteakommun'
                img='/piteakommun.png'
                header='Piteå kommun'
                role='Supervisor at Ung i Piteå'
                timeslot='JUN 2016 - SEP 2018'
            />
        </div>
    )
}

export default ExperienceContainer
