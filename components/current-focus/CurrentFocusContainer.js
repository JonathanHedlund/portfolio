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
                    timeslot="Mars 2020 - Current"
                    text="A next-generation platform for helping e-commerce companies and influencers connect and collaborate."
                    link="/portfolio/splick"
                    />
                <CurrentFocusItem 
                    img="/intam.png"
                    header="Intam" 
                    role="Founder"
                    timeslot="August 2020 - Current"
                    text="A web agency that specializes in creating user-friendly and responsive websites tailored for the customer's goals."
                    link="/portfolio/intam"
                />
                <CurrentFocusItem 
                    img="/klassfoto.jpg"
                    header="Umeå University" 
                    role="Student"
                    timeslot="August 2016 - Current"
                    text="I'm currently a student at Umeå University studying interaction design and economics."
                    link="/portfolio/umeauniversity"
                />
            </div>
        </div>
    )
}

export default CurrentFocusContainer
