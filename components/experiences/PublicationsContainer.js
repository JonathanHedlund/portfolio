import ExperienceHeader from './ExperienceHeader'
import PublicationItem from './PublicationItem'

import styles from '../../styles/Experience.module.css'

const PublicationsContainer = () => {
    return (
        <div  className={styles.experienceContainer}>
            <ExperienceHeader header="Publication" button={false}/>
            <PublicationItem 
                link="https://press.um.si/index.php/ump/catalog/book/581"
                header="Designing call to action: Users’ perception of different characteristics"
                role="Mejtoft, T., Hedlund, J., Cripps, H., Söderström, U., & Norberg, O. (2021)"/>
        </div>
    )
}

export default PublicationsContainer
