import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Contact.module.css'

const ContactFormMap = () => {
  const AnyReactComponent = () => <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className={styles.icon} />

    const defaultProps = {
        center: {
          lat: 63.825848,
          lng: 20.263035
        },
        zoom: 13
      };

      const handleApiLoaded = (map, maps) => {
        // use map and maps objects
      };

    return (
        <div className={styles.mapContainer}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyD017DDf15cgKA_bm1fBVBoSOUJXaejtSk" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
              className={styles.mapContainer}
            >
              <AnyReactComponent
                lat={63.8275}
                lng={20.263035}
              />
            </GoogleMapReact>
        </div>
    )
}

export default ContactFormMap

