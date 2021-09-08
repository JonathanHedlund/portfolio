import styles from '../../styles/Contact.module.css'

const ContactForm = () => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.header}>Contact me!</h2>
            <p className={styles.desc}>
                Get in touch with me to by filling out the contact form below.
            </p>
            <input type="text" className={styles.textInput} placeholder="Email"/>
            <input type="text" className={styles.textInput} placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" className={styles.textArea} placeholder="Message"></textarea>
            <input type="submit" className={`btn ${styles.formSubmitButton}`} value="Send!"/>
        </div>
    )
}

export default ContactForm
