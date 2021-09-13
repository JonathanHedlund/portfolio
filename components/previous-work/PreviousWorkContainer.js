import PreviousWorkItem from './PreviousWorkItem'

import styles from '../../styles/PreviousWork.module.css'

const PreviousWorkContainer = () => {
    return (
        <div className={styles.previousWorkContainer}>
            <h2 className={styles.header}>Some of my previous work</h2>
            <div>
                <PreviousWorkItem 
                    img="/splick.png"
                    link="/portfolio/hobbies"
                    header="Hobbies"
                    tags="Design, Entreprenourship"
                    timeslot="August 2020 - Januari 2021"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                    textMobile="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa."
                    />
                <PreviousWorkItem 
                    img="/splick.png"
                    link="/portfolio/arboreal"
                    header="Arboreal"
                    tags="Design, Entreprenourship"
                    timeslot="Januari 2019 - June 2019"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                    textMobile="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa."
                    flip={true}
                    />
            </div>
        </div>
    )
}

export default PreviousWorkContainer
