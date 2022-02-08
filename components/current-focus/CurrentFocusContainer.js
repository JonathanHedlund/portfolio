import CurrentFocusItem from './CurrentFocusItem'

import styles from '../../styles/CurrentFocus.module.css'

const CurrentFocusContainer = () => {
    return (
        <div className={styles.currentFocusMainContainer}>
            <h2 className={styles.header}>What I'm currently focusing on</h2>
            <div className={styles.currentFocuses}>
                <CurrentFocusItem 
                    img="/splick.png"
                    header="Splick" 
                    role="Co-founder"
                    timeslot="MARCH 2020 - CURRENT"
                    text="A next-generation platform for helping e-commerce companies and influencers 
                    connect and collaborate."
                    link="/portfolio/splick"
                    />
                <CurrentFocusItem 
                    img="/intam.png"
                    header="Intam" 
                    role="Founder"
                    timeslot="AUGUST 2020 - CURRENT"
                    text="A web agency that specializes in creating user-friendly and responsive 
                    websites tailored for the customer's needs."
                    link="/portfolio/intam"
                />
                <CurrentFocusItem 
                    img="/klassfoto.jpg"
                    header="Umeå University" 
                    role="Student"
                    timeslot="AUGUST 2016 - CURRENT"
                    text="I'm currently a student at Umeå University studying economics."
                    link="/portfolio/umeauniversity"
                />
            </div>
        </div>
    )
}

export default CurrentFocusContainer
