import HeaderNav from '../../components/HeaderNav'
import ExperienceCollection from '../../components/experiences/ExperienceCollection'

import styles from '../../styles/Home.module.css'

const index = () => {
    return (
        <div className={styles.container}>
            <HeaderNav />
            <ExperienceCollection />
        </div>
    )
}

export default index
