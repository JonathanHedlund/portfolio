import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

import styles from '../../styles/Contact.module.css'

const ContactFormMap = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    return (
        <div className={styles.mapContainer}>

        </div>
    )
}

export default ContactFormMap

