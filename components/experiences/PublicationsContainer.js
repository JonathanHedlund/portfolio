import ExperienceHeader from './ExperienceHeader'
import PublicationItem from './PublicationItem'

import styles from '../../styles/Experience.module.css'

const PublicationsContainer = () => {
    return (
        <div  className={styles.experienceContainer}>
            <ExperienceHeader header="Publications" button={false}/>
            <PublicationItem 
                link="http://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-192335"
                header="Using Machine Learning to Connect Brands with Influencers (Master Thesis)"
                role="Hedlund, J. (2022)"/>
            <PublicationItem 
                link="https://press.um.si/index.php/ump/catalog/book/581"
                header="Designing call to action: Users’ perception of different characteristics"
                role="Mejtoft, T., Hedlund, J., Cripps, H., Söderström, U., & Norberg, O. (2021)"/>
        </div>
    )
}

export default PublicationsContainer
