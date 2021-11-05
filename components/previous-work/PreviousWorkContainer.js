import PreviousWorkItem from './PreviousWorkItem'

import styles from '../../styles/PreviousWork.module.css'

const PreviousWorkContainer = () => {
    return (
        <div className={styles.previousWorkContainer}>
            <h2 className={styles.header}>Some of my previous projects</h2>
            <div>
                <PreviousWorkItem 
                    img="/hobbies.png"
                    link="/portfolio/hobbies"
                    header="Hobbies"
                    tags="Design, Entreprenourship"
                    timeslot="AUGUST 2020 - JANUARY 2021"
                    text="A service where the user can connect and communicate with others who have the same 
                        interests, and get more out of exercising their interests on their own. This service was
                        developed during a course focusing on the entire business development process, 
                        from idea to presentation of a finished prototype and business plan."
                    textMobile="A service where the user can connect and communicate with others who have the same 
                        interests, and get more out of exercising their interests on their own." />
                <PreviousWorkItem 
                    img="/arboreal-show-case.png"
                    link="/portfolio/arboreal"
                    header="Arboreal Prototype"
                    tags="Design, Prototyping"
                    timeslot="JANUARY 2019 - JUNE 2019"
                    text="Forest measurements with your mobile phone. Arboreal uses AR technology to transform 
                        the forest into a digital variant where you can perform measurements in real-time. 
                        As a part of a school project, I worked alongside four others to help the start-up company 
                        Arboreal design a prototype of the full user flow for their service through a 
                        process called Design Build Test (DBT)."
                    textMobile="Forest measurements with your mobile phone. Arboreal uses AR technology to transform 
                        the forest into a digital variant where we can perform measurements in real-time."
                    flip={true} />
            </div>
        </div>
    )
}

export default PreviousWorkContainer
