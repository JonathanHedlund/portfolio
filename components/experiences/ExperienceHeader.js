import Link from 'next/link'

import styles from '../../styles/Experience.module.css'

const ExperienceHeader = ( {header, button} ) => {
    return (
        <div className={styles.experienceHeaderContainer}>
            <h2 className={styles.experienceHeader}>
                {header}
            </h2>
            {button &&  
            <Link href="/portfolio">
                <a className="btn">
                    View all
                </a>
            </Link>}
        </div>

    )
}

export default ExperienceHeader
