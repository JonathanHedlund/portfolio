import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import PreviousWorkItem from './PreviousWorkItem'

import styles from '../../styles/PreviousWork.module.css'

const PreviousWorkContainer = () => {
    if (typeof window !== "undefined") {
        AOS.init();
    }

    return (
        <div className={styles.previousWorkContainer}>
            <h2 className={styles.header}>Some of my previous projects</h2>
            <div>
                <div data-aos="fade-left"     
                    data-aos-offset="200" data-aos-duration="600">
                    <PreviousWorkItem 
                        img="/hobbies.png"
                        link="/portfolio/hobbies"
                        header="Hobbies"
                        tags="Design, Entreprenourship"
                        timeslot="AUG 2020 - JAN 2021"
                        text="A service where the user can connect and communicate with others who have the same 
                            hobbies, and get more out of exercising their hobbies on their own. "
                        textMobile="A service where the user can connect and communicate with others who have the same 
                            hobbies, and get more out of exercising their hobbies on their own." />
                    </div>
                <div data-aos="fade-right"
                    data-aos-offset="150" data-aos-duration="600">
                    <PreviousWorkItem 
                        img="/arboreal-show-case.png"
                        link="/portfolio/arboreal"
                        header="Arboreal Prototype"
                        tags="Design, Prototyping"
                        timeslot="JAN 2019 - JUN 2019"
                        text="Forest measurements with your phone. Arboreal uses AR technology to transform 
                            the forest into a digital variant where you can perform measurements in real-time."
                        textMobile="Forest measurements with your phone. Arboreal uses AR technology to transform 
                            the forest into a digital variant where we can perform measurements in real-time."
                        flip={true} />
                </div>
            </div>
        </div>
    )
}

export default PreviousWorkContainer
