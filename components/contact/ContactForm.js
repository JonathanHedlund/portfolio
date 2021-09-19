import { useRef, useState } from 'react';

import emailjs from 'emailjs-com'

import styles from '../../styles/Contact.module.css'

const ContactForm = () => {
    const form = useRef();

    const [formStatus, setFormStatus] = useState()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4495msr', 'template_xe3ko0h', form.current, 'user_gaMLP53oPSnRCwOYsS3bt')
        .then((result) => {
            console.log(result.text);
            setFormStatus({
                status: true,
                message: "Your message was sent successfully! I'll get back to you with a response shortly."
            })
        }, (error) => {
            console.log(error.text);
            setFormStatus({
                status: false,
                message: "Oh, something went wrong. Try sending a mail to jonathan.hedlund.371@gmail.com instead!"
            })
        });
    }

    return (
        <form className={styles.formContainer} onSubmit={sendEmail} ref={form}>
            <h2 className={styles.header}>Contact me!</h2>
            <p className={styles.desc}>
                Get in touch with me to by filling out the contact form below.
            </p>
            <input type="text" name="from" className={styles.textInput} placeholder="Email"/>
            <input type="text" name="subject" className={styles.textInput} placeholder="Subject"/>
            <textarea name="message" id="" cols="30" rows="10" className={styles.textArea} placeholder="Message"></textarea>
            <input type="submit" className={`btn ${styles.formSubmitButton}`} value="Send!"/>
            {formStatus &&             
            <div className={formStatus.status ? styles.contactFormStatusSuccess : styles.contactFormStatusError}>
                {formStatus.message}
            </div>}
        </form>
    )
}

export default ContactForm
