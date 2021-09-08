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
                    text="A startup company creating a service for influencers and brands to cooperate through."
                    linken="/"
                    />
                <CurrentFocusItem 
                    img="/klassfoto.jpg"
                    header="Umeå University" 
                    role="Student"
                    timeslot="August 2016 - Current"
                    text="Currently a student at Umeå University studying Interaction design and economics."
                    linken="/"
                />
                <CurrentFocusItem 
                    img="/intam.png"
                    header="Intam" 
                    role="Founder"
                    timeslot="August 2020 - Current"
                    text="Web agency specialising in creating easy to use and responsive web solutions."
                    linken="/"
                />
            </div>
        </div>
    )
}

export default CurrentFocusContainer
