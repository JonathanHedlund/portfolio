import ContactForm from './ContactForm'
import ContactFormMap from './ContactFormMap'

import styles from '../../styles/Contact.module.css'

const ContactFormContainer = () => {
    return (
        <div className={styles.contactFormContainer}>
            <ContactForm />
            <ContactFormMap />
        </div>
    )
}

export default ContactFormContainer
