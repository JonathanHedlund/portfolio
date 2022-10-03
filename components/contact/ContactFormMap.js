import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/Contact.module.css'

const ContactFormMap = () => {
	const AnyReactComponent = () => (
		<FontAwesomeIcon icon={['fas', 'map-marker-alt']} className={styles.icon} />
	)

	const defaultProps = {
		center: {
			lat: 59.3293,
			lng: 18.0686,
		},
		zoom: 6.5,
	}

	const handleApiLoaded = (map, maps) => {
		// use map and maps objects
	}

	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyD017DDf15cgKA_bm1fBVBoSOUJXaejtSk' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
				className={styles.mapContainer}
			>
				<AnyReactComponent lat={59.3393} lng={18.0686} />
			</GoogleMapReact>
		</div>
	)
}

export default ContactFormMap
